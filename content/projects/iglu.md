---
title: iglü
section: "Others"
date: 2020-04-23
site: https://nacdlow.com
Description: "A smart home system of the future (group project)."
Image: /projects/iglu/eink.jpg
Imagealt: "a photograph of the iglü device, which is a 3D printed rounded box with an e-ink display, showing the URL of the system at local.nacdlow.com, the power generation as 40 kilowatts, the power consumption at 120 kilowatts, and the battery level at 57%"
Usability: 4
url: /iglü
aliases:
  - /iglu
  - /projects/iglu
  - /igloo
  - /iglo
---

### 1. Overview

[**Check out our documentary (YouTube)**](https://www.youtube.com/watch?v=KMfItuTf2jQ)

As a part of a two-semester long Software Engineering project at Heriot-Wat
University, we (a group of six students) have been asked to create a fictitious
software engineering company which is building a smart home system of the
future to a client. During the 7 months we have built:

- A smart home system with a [plugin API (over RPC)](https://github.com/hashicorp/go-plugin)
  as a responsive (progressive) web application.
	- Includes a simulation module for testing.
- A Minecraft server ([Spigot]) plugin for testing and demonstrating the
  smart home system on an environment which we can control. Hooked using our
  plugin API.
- An internal wiki with training/learning material, log and recording of
  meetings, style guides, member roles, research and brainstorming, etc.
- A tool to allow us to generate Markdown documentation based on `go doc`, as
  no good solution exists.
- A custom DNS server which allows us to have specific responses to specific
  domains (for testing on mobile devices).
- A testing payments gateway with [Stripe].
- A custom Raspbian distribution for use with our Raspberry Pi (enclosed in our
  custom 3D-printed case), this enables iglü as a system service, and adds
  debugging functionality (Ethernet gadget, serial console, pre-setup WPA2
  Enterprise with wpa\_supplicant, etc).
- A plugin packager (with GUI) which speeds up cross-compiling, compressing and
  packaging plugins directly for the marketplace.
- A [marketplace website](https://market.nacdlow.com), generated with a static website generator ([Hugo]).
- A [marketing (corporate) website](https://marketing.nacdlow.com) describing
  the company's goal, the team members, and information regarding our product.

Afterwards, we converted [nacdlow.com](https://nacdlow.com) into a portfolio
website describing each of the project we worked on. The description in section
two of this document is adapted from the portfolio website.

You may also check out our coursework's [stage 3
report](https://nacdlow.com/nacdlow-stage-3-report.pdf) which goes in detail
regarding the entire project.

### 1.1. What tools were used?

The core parts of the project (such as the web application server and plugin
API) is written in [Go], but other languages have been used in different parts
of the project, such as Java for the Minecraft plugin, [LaTeX] for
collaborating on requirements specifications. Getting the e-ink display to work
required us to modify the [Waveshare driver](https://github.com/waveshare/e-Paper)
so we can display the output upside-down, which was a bit tricky. The program
to update the e-ink display was written in Python.

We even used tools such as [Adobe XD] for prototyping and usability testing,
[Tinkercad] for creating the iglü case which was 3D printed (thanks to
Edinburgh Hacklab). Other tools used were Blender, GIMP, Adobe Lightroom,
Photoshop, After Effects, Premiere Pro, and Illustrator, these were used in
making graphics, banners, logos, promotional video and other forms of artwork.
We are lucky to have a group with a diverse range of skills.

### 1.2. Links & Infrastructure

The following are all of the services part of the project.

- [nacdlow.com](https://nacdlow.com)
	- The group portfolio website, used to be the marketing website.
- [marketing.nacdlow.com](https://marketing.nacdlow.com)
	- The Wordpress marketing website built by Mark.
- [demo.nacdlow.com](https://demo.nacdlow.com)
	- Virtual expo demo and (now defunct) Minecraft server instance
	  information page.
- [app.nacdlow.com](https://app.nacdlow.com)
	- Virtual expo iglü application instance, linked from the demo page.
- local.nacdlow.com
	- This is used to be the local testing domain, this is usually set on the
	  developers' machines to the loopback address. This is used with the Dev
	  DNS application described in the next section.
- [market.nacdlow.com](https://market.nacdlow.com)
	- The iglü marketplace which hosts the plugin descriptions and their
	  binaries.
- [payment.nacdlow.com](https://payment.nacdlow.com)
	- The Stripe test payment gateway for the marketplace.
- [wiki.nacdlow.com](https://wiki.nacdlow.com)
	- The team's internal development wiki, contains information about code and
	  design style guides, group organisation and structure information,
	  learning material, and more.
	  
A mail server has been setup, and each member of the team has an inbox (such as
[humaid@nacdlow.com](mailto:humaid@nacdlow.com)). A general broadcast email was
also created. This is as we try to manage our group as similarly to an actual
company as possible, and from that we have learned a lot.

### 2. Description

Each project has a its own description, each project will be listed below.

#### 2.1. iglü server

![Screenshot of iglü's dashboard, showing a greeting, the outside temperature,
the solar battery status, the energy consumption and usage chart, favourite
shortcuts, and energy tips](/projects/iglu/iglu.png)

This is the core of the smart home system. This project contains most of the
work done on the project. It is a self-contained project which includes:

- Web server
- Web app files and logic
- Database (SQLite, or can connect to external databases)
- Plugin API

[Visit our demo website](https://demo.nacdlow.com) to try it out!


It is the web server and control system for the smart home. Its purpose is to
control home appliances and Internet-connected devices. It is self-contained,
handling access-control among other things, and should work without Internet
connection.

The server is written in [Go], and uses the [macaron] web framework and [XORM]
for the object-relational mapping library. We have built a custom plugin API
which runs over Remote Procedure Calls (RPC) using HashiCorp's [go-plugin]
library.

For the front-end, iglü uses [MDBootstrap] for the basic design, which we have
built upon. And to provide more interactivity and better user experience
quickly, we have used [jQuery]. Other libraries are used such as [Chart.js],
[FontAwesome], and [Skycons] (from Darksky) to add dynamic graphical elements
on the page.

These are some libraries and frameworks we have used to speed up development
so we could focus on the product.

##### 2.1.1. Building and running iglü server

Since the source code of the project is provided, you may build and run iglü.

You require the following packages:

- git
- Go (1.12+)
- GNU Make
- go-bindata

Then clone the project, build, and run it.

```sh
$ git clone https://github.com/Nacdlow/iglu-server
$ cd iglu-server
$ make
$ ./nacdlow-server run [--port 443] [--dev]
```

No database set-up is required, all required tables will be created
automatically on an SQLite database file.

#### 2.2. iglüOS

![a screenshot of the boot messages, with the snippet in the middle stating
Welcome to igluOS (snowball)](/projects/iglu/igluOS.jpeg)

iglüOS is our custom Raspbian Lite-based distribution built for Nacdlow's iglü.
It allows you to have an OS image for the Raspberry Pi with iglü installed as a
service, which boots on startup.

It also allows you to also set up WiFi configuration (eduroam, in this case)
for expo purposes.

Our distribution includes the following changes:

- Support for Real-time Clock (specifically, PCF8523), and removes the
  `fake-hwclock`.
- Support for using Raspberry Pi's Ethernet adapter (appears as Ethernet gadget
  device over USB, static IP set to `10.0.0.2`).
- Support for eduroam with pre-filled credentials.
- Installs iglü server and adds it as a service.
- Installs and runs our e-ink display program as a service.
- Enables SPI for e-ink display support.

We ran this distribution on a Raspberry Pi Zero W, which contains a Waveshare
e-ink display and a real-time click (RTC). We placed this in a 3D-printed case
printed on a Prusa 3D printer at the Edinburgh Hacklab.

To create this custom distribution, we created a set of Bash scripts which
modifies Raspbian Lite. This is done by resizing the main partition in the
`.img` file using `qemu`, and using `kpartx` to mount the partitions to
loop devices. Once mounted, the script performs any modifications to the files,
utilising `proot` along with `qemu-arm-static` to run commands for updating and
installing packages, enabling custom `systemd` services, and do other changes
to the system.

The resulting image is then flashed to a microSD card, and inserted in the
Raspberry Pi fully configured and working.

#### 2.3. godoc2markdown

![a screenshot of the generated documentation](/projects/iglu/godoc.jpg)

As we were working on private GitLab repositories, we weren't able to use
[GoDoc](https://godoc.org) to generate documentation for our project.

So we created a simple Unix-like tool which allows you to pipe the output of go
doc to generate Markdown.

After implementing this, we have created a script to generate our Wiki for the
iglü server repository automatically, including a table-of-contents.

I have released this program [as a separate project](/projects/godoc2markdown),
which you may check out and use.

#### 2.4. Dev DNS

![a screenshot of the dev dns server running, indicating that it will resolve
local.nacdlow.com to 10.0.0.219, and other queries will be redirected to
8.8.8.8](/projects/iglu/devdns.jpg)

This is a custom Domain Name Server which returns a custom response for our
domain, used for testing PWAs with HTTPS support (required by service workers).

In our use case we set it up to resolve `local.nacdlow.com` to our local
computer's IP address.

It uses Miek Gieben's DNS library for both resolving and serving.

#### 2.4. Plugin SDK

![a screenshot of a code snippet with an implementation of a test plugin,
displaying the OnLoad and GetManifest functions stubbed](/projects/iglu/plugin-sdk.jpg)

This is our Software Development Kit for developing iglü server plugins in Go.
It is based on HashiCorp's [go-plugin] library, which they use in their products.

Plugins communicate with the iglü server via Remote Procedure Calls (RPC), this
makes it so that if a plugin crashes, the server will continue running and
allows us to restart the plugin. Also it allows us to create plugins in
different languages if required in the future.

This SDK provides a Go interface which can be implemented so the server may
load the binary.

#### 2.5. Plugin Packager

![a screenshot of the plugin packager, with a text input of the plugin
directory to package, fields to display the plugin manifest, and tick boxes to
select architectures to build for. At the bottom there is a field to input the
repository directory, and a big "Package" button.](/projects/iglu/plugin-packager.jpg)

This is our internal plugin package graphical program, which allows us to:

- Generate/check manifests
- Cross-compile to multiple platforms
- Strip binaries
- Calculate checksums
- Archive the binary (using `xz`)

It then places it in the marketplace repository, and stores them in categories
depending on the platform/architecture (just like Debian's APT).

#### 2.6. Marketplace

![a screenshot of the marketplace, showing the scheduler as the featured
plugin, priced at 1.99 pound sterling, there are options to view plugins by
category, and a list of plugins](/projects/iglu/marketplace.png)

This is iglü marketplace website and plugin repository. It contains the
descriptions of all plugins, and their compiled binaries. The website is also
linked to our Payment Gateway for purchasing paid plugins.

To download a package, the marketplace redirects the user to the local iglü
instance prompting the download of the plugin.

The site is built with [Hugo], and is statically generated
(just like this current website).

Visit the marketplace: <https://market.nacdlow.com>

#### 2.7 Payment Gateway

![a screenshot of the Stripe payment gateway, on the payment page for the
Scheduler plugin, priced at 1.99 pound sterling, there are fields on the right
for the card payment details](/projects/iglu/payment.jpg)

Our Stripe testing payment gateway, which is built for our static Marketplace
website. This is deployed on [Heroku] and uses Stripe's Go library.

This payment gateway may only be accessed through the Marketplace, and since
this is using Stripe's test mode, you may use their [test card
numbers](https://stripe.com/docs/testing) to continue through the purchase. You
may try `4242 4242 4242 4242` with any expiry/CVV number.

#### 2.8. E-Ink Display

{{< image >}}

We wrote a program in Python which pulls in data from the smart home
system and displays it on the e-ink display. We used FontAwesome icons and
converted them to bitmaps to support the display.

This program uses our Waveshare Driver Patch so the
display is flipped upside-down, due to the space constriction in the 3D printed
case.

#### 2.9. Waveshare Driver Patch

We built a patch for the Python Waveshare `epd2in13_V2.py` driver, which flips
the output upside-down.

This is because of the limitations of our 3D printed build, and where the USB
power port is located on the Raspberry Pi Zero W.

Instructions on using this patch is available in the [project's repository
page](https://github.com/Nacdlow/waveshare-driver-patch).

#### 2.10. Minecraft Simulation Spigot Plugin

We created a [Bukkit]/[Spigot] [Minecraft] server plugin, which allows us to
sync aspects of the simulated iglü environment in a Minecraft game world. We
did this instead of building our own custom simulation environment, whether
that be a simple interface or a custom simulation game.

This allowed us to save a lot of time in simulating, as Minecraft is a game
which is easy to extend.

#### 2.11. Minecraft Simulation iglü Plugin

To make the Minecraft Spigot plugin work, we built a iglü plugin, which is
built entirely using our Plugin SDK. This allows our Minecraft Spigot plugin to
display in-game lights and devices in the "search devices" list.

#### 2.12. LIFX iglü Plugin

To demonstrate that the system may also interact with the real world, we
created an iglü plugin which integrates the LIFX Wi-Fi enabled LED bulbs to
hook into iglü, displaying all the available lights registered on the account.

#### 2.13. Light Mode iglü Plugin

This is an iglü plugin which customises the look-and-feel of iglü using web
extensions, adding a light theme to the iglü interface.

### 3. Our Group

The group consists of:

- [Alakbar Zeynalzade]\: Reporter and Organisational Manager
- [Amaan Akram]\: Organisational and Technical Manager
- [Humaid AlQassimi]\: Leader and Technical Manager
- [Mark S Bird]\: Liaison
- [Numan Ali]\: Technical Manager
- [Ruaridh Mollica]\: Organisational Manager


### 4. Project Source Code

Although the projects are not open-sourced, the projects' source code may still
be browsed on our [GitHub organisation](https://github.com/Nacdlow).

This means you may only view the source code, you may not be able to use any
parts of the source code or redistribute it. The project remains the exclusive
rights of the project creators.

[Alakbar Zeynalzade]: https://alak.bar
[Amaan Akram]: https://amaanakram.tech/
[Humaid AlQassimi]: https://huma.id
[Mark S Bird]: https://www.linkedin.com/in/mark-bird-/
[Numan Ali]: https://github.com/n-ali1
[Ruaridh Mollica]: https://ruaridhmollica.com/

[LaTeX]: https://www.latex-project.org/
[Adobe XD]: https://www.adobe.com/products/xd.html
[Spigot]: https://www.spigotmc.org/wiki/about-spigot/
[Hugo]: https://gohugo.io
[Go]: https://go.dev
[Tinkercad]: https://www.tinkercad.com/
[Stripe]: https://stripe.com/

[macaron]: https://go-macaron.com
[XORM]: https://xorm.io
[go-plugin]: https://github.com/hashicorp/go-plugin
[MDBootstrap]: https://mdbootstrap.com
[jQuery]: https://jquery.com
[Chart.js]: https://github.com/hashicorp/go-plugin
[Skycons]: https://darkskyapp.github.io/skycons/
[FontAwesome]: https://fontawesome.com/

[Bukkit]: https://bukkit.gamepedia.com/Main_Page
[Spigot]: https://spigotmc.org
[Minecraft]: https://minecraft.net

[Heroku]: https://heroku.com

[AGPL license]: https://tldrlegal.com/license/gnu-affero-general-public-license-v3-(agpl-3.0)
