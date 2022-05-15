---
title: "Reliable Plugins in Go"
date: 2020-07-04
url: /go-plugin
aliases:
  - "/blog/go-plugin"
---

When working on our [university group project on a smart home
system](https://nacdlow.com), I had an idea to support a marketplace, something
similar to Firefox's extensions. Go [supports loading
plugins](https://golang.org/pkg/plugin/), which are shared libraries which are
dynamically loaded. At first this was fine, but we quickly faced issues with
reliability, such as:

- When a plugin panics, the host process crashes.
- When a plugin is loaded, it cannot be unloaded/reloaded.
- Plugins may interfere or conflict with libraries.
- Plugins share the same memory space of the host process.

Also there is no formal interface which these plugins implement, we only rely
on "looking up" if a function is implemented or not. These are dealbreakers
when building a system which aims to be reliable.

HashiCorp's [Go plugin system](https://github.com/hashicorp/go-plugin) seems to
be the best solution to our current problem, it is used throughout HashiCorp's
products. It was a bit difficult for me to understand, as there is barely any
documentation about usage, only example code is provided which was confusing. I
hope I am able to explain how HashiCorp's go plugin system works, which I'll
refer to from now on as `go-plugin`.

### Overview

We'll be implementing a `go-plugin` without gRPC, so we don't have to deal with
Protobuf yet. Let's split this plugin architecture into three well-defined
parts, so we know what we are talking about.

- **Host**: This is the program which loads and manages the plugin.
- **Interface**: This is a simple library which is imported by both the
  **Host** and **Plugin**, containing the interface which must be implemented
  by the **Plugin**.
- **Plugin**: This is a program which implements the **Interface**, and is
  loaded by the **Host**.

In this guide, we are building a plugin system for a **Host** called Iglu. 
Both the **Host** and **Plugin** must have the same [handshake config], so they
know that they can communicate. So we can write the following in both the **Host**
and **Plugin**:

```go
var handshakeConfig = plugin.HandshakeConfig{
	ProtocolVersion:  1,
	MagicCookieKey:   "IGLU_PLUGIN",
	MagicCookieValue: "MzlK0OGpIRs",
}
```

**Note**: This is not a security measure, this is not used in encryption or
cryptography in the communication between the **Host** and **Plugin**.

### Interface implementation

The Interface is a the library which is used by both the host and plugin, so
they can agree on the functions which the plugin implements.


Let's implement a simple interface, with a function called `GetManifest()`
which returns a struct, defined in this interface.

```go
// Iglu is the interface that we're exposing as a plugin.
type Iglu interface {
	GetManifest() PluginManifest
}


// PluginManifest is used to describe the plugin's id, name, author, version, etc.
type PluginManifest struct {
	Id, Name, Author, Version string
}
```

And we can implement the basic `go-plugin` interface using this boilerplate:

```go
// This is the implementation of plugin.Plugin.
type IgluPlugin struct {
	Impl Iglu
}

func (p *IgluPlugin) Server(*plugin.MuxBroker) (interface{}, error) {
	return &IgluRPCServer{Impl: p.Impl}, nil
}

func (IgluPlugin) Client(b *plugin.MuxBroker, c *rpc.Client) (interface{}, error) {
	return &IgluRPC{client: c}, nil
}
```

We will first implement the basic structures which are used before implementing
the `GetManifest()` function.

```go
// IgluRPC is what the Host uses to communicate to the Plugin.
type IgluRPC struct {
	client *rpc.Client
}

// IgluRPCServer is the implementation of the interface, running on the Plugin.
type IgluRPCServer struct {
	Impl Iglu
}
```

We have to now implement this `GetManifest()` function in both the **Plugin**
and the **Host** side.

The first is the **Plugin** implementation, which simply passes the response of
the plugin back to the **Host**:

```go
func (s *IgluRPCServer) GetManifest(args interface{}, resp *GetManifestReply) error {
	resp.Manifest = s.Impl.GetManifest()
	return nil
}
```

And the second is the RPC implementation for the **Host**, which allows us to
easily call these functions:

```go
func (i *IgluRPC) GetManifest() PluginManifest {
	rep := GetManifestReply{}
	err := i.client.Call("Plugin.GetManifest", new(interface{}), &rep)
	if err != nil {
		panic(err)
	}
	return rep.Manifest
}
```

So for every function we want our plugin to implement, we need to make these
two implementations. When creating a plugin API with a large set of functions,
it may be a good idea to use Go templates to generate these, which is
[Mattermost's solution](https://github.com/mattermost/mattermost-server/blob/e77ef9733c975265f07a0da6f1dd9e4ab857d439/plugin/interface_generator/main.go).

### Host implementation

In the Host, we imported the interface library as `sdk`. We can first start by
implementing a function which simply loads the plugin and prints the manifest,
given a plugin filename.

```go
import (
	hclog "github.com/hashicorp/go-hclog"
	"github.com/hashicorp/go-plugin"
	// import your interface implementation
)

// pluginMap is a map of supported plugin interfaces.
var pluginMap = map[string]plugin.Plugin{
	"iglu_plugin": &sdk.IgluPlugin{},
}

func loadPlugin(f string) {
	// Create an hclog.Logger
	logger := hclog.New(&hclog.LoggerOptions{
		Name:   "plugin",
		Output: os.Stdout,
		Level:  hclog.Debug,
	})

	// We're a host! Start by launching the plugin process.
	client := plugin.NewClient(&plugin.ClientConfig{
		HandshakeConfig: handshakeConfig,
		Plugins:         pluginMap,
		Managed:         true,
		Cmd:             exec.Command(fmt.Sprintf("./plugins/%s", f)),
		Logger:          logger,
	})

	// Connect via RPC
	rpcClient, err := client.Client()
	if err != nil {
		log.Fatal(err)
	}

	// Request the plugin
	raw, err := rpcClient.Dispense("iglu_plugin")
	if err != nil {
		log.Fatal(err)
	}

	plugin := raw.(sdk.Iglu)
	fmt.Println(plugin.GetManifest())
}

```

Now we can run the plugin's functions directly. To manage the state of these
plugins, we'll create a struct:

```go
type PluginState int

const (
	Stopped = iota
	Running
	Crashed
)

// IgluPlugin represents a loaded Iglu plugin.
type IgluPlugin struct {
	Plugin   sdk.Iglu             // This is the interface we'll be calling
	client   *plugin.Client       // This is the go-plugin interface
	State    PluginState          // This is our enum to keep track of the state
	Filename string               // In case we need to reload the plugin.
	Manifest sdk.PluginManifest   // We'll cache the manifest, so we can get it if it crashes.
}
```

So now we have a way to represent our plugin's state, and cache the manifest
(or other static fields). Let's amend our `loadPlugin()` function:

```go
func loadPlugin(f string) IgluPlugin {
	[ ... ]
	
	return IgluPlugin {
		Plugin: plugin,
		client: client,
		Filename: f,
		Manifest: plugin.GetManifest(),
	}
}
```

### Plugin implementation

Now the plugin implementation should contain a `main()` function and the
handshake configuration. We'll call this implementation `AmazingPlugin`.

```go
var handshakeConfig = plugin.HandshakeConfig{
	ProtocolVersion:  1,
	MagicCookieKey:   "IGLU_PLUGIN",
	MagicCookieValue: "MzlK0OGpIRs",
}


// AmazingPlugin is an implementation of IgluPlugin
type AmazingPlugin struct {
	logger hclog.Logger
}

func main() {
	logger := hclog.New(&hclog.LoggerOptions{
		Level:      hclog.Trace,
		Output:     os.Stderr,
		JSONFormat: true,
	})

	amazing := &AmazingPlugin{
		logger: logger,
	}

	// pluginMap is the map of plugins we can dispense.
	var pluginMap = map[string]plugin.Plugin{
		"iglu_plugin": &sdk.IgluPlugin{Impl: amazing},
	}

	plugin.Serve(&plugin.ServeConfig{
		HandshakeConfig: handshakeConfig,
		Plugins:         pluginMap,
	})
}
```

**Note:** We should import and implement the same version of the **Interface**,
otherwise you might get errors if the interfaces don't match.

Now we can implement our `GetManifest()` method, remember that `sdk` is the
**Interface** library in this case.

```go
func (g *AmazingPlugin) GetManifest() sdk.PluginManifest {
	return sdk.PluginManifest{
		Id:      "amazing",
		Name:    "Amazing Plugin",
		Author:  "Someone Amazing",
		Version: "v0.1.0",
	}
}
```

Just remember that we must implement all the interface functions, otherwise you
won't be able to compile the plugin.

### Loading plugins in a directory

We can define a folder, let's say `./plugins`, where all the plugins would be
located, and load the plugins from there.

```go
var loadedPlugins = make(map[string]IgluPlugin)

func LoadPlugins() {
	files, err := ioutil.ReadDir("./plugins")
	if err == nil {
		for _, f := range files {
			if !f.IsDir() {
				pl := loadPlugin(f.Name())
				loadedPlugins[pl.Manifest.Id] = pl
			}
		}
	}
}
```

### Handling crashes gracefully

What if a plugin crashes? We could check the state of the plugin, if
`go-plugin` states that the client exited while it is supposed to be running,
we can mark that as crashed.

```go
func markCrashedPlugins() {
	for i, plugin := range loadedPlugins {
		if plugin.client.Exited() && plugin.State == Running {
			loadedPlugins[i].State = Crashed
		}
	}
}
```

You can see further implementations as references, such as my [iglü
project](https://github.com/Nacdlow/iglu-server), [Mattermost's
implementation](https://github.com/mattermost/mattermost-server/tree/master/plugin),
or [go-plugin's example
implementations](https://github.com/hashicorp/go-plugin/tree/master/examples).


*This is my fifth post in the [#100DaysToOffload](https://100daystooffload.com)
challenge.*

[handshake config]: https://godoc.org/github.com/hashicorp/go-plugin#HandshakeConfig
