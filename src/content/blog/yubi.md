---
title: "Setting up a Yubikey on Void Linux"
pubDate: 2020-06-16
description: "Guide on setting up a YubiKey on Void Linux"
slug: yubi
---

I recently got a [Yubikey], which is a hardware authentication device. It has
multiple functions, the Yubikey 4 has two slots which you can configure.
Getting the device to work on Void Linux wasn't obvious, this is a simple guide
and a future reference on how to get a Yubikey working on [Void Linux].

### Setting up your system

First you need to install `dbus`, `eudevd`, and `elogind` if you haven't
installed it yet.

```sh
# xbps-install -Sy dbus eudev elogind
```

You have to enable those services.

```sh
# ln -s /etc/sv/{dbus,udevd,elogind} /var/service/
```

Now you need to install Yubikey packages:

```sh
# xbps-install -Sy u2f-hidraw-policy ykpers ykpers-gui
```

After restarting your system, you can then plug in your key, and run
the `ykpers-gui` utility (or `ykpers` if you prefer a command-line interface).

![A screenshot of the ykpers-gui utility on the About page](./yubi/ykpers-gui.png)

### Further configuration

The [Arch Wiki Yubikey article](https://wiki.archlinux.org/index.php/Yubikey)
has detailed examples on how you could setup your key.

_This is my third post in the [#100DaysToOffload](https://100daystooffload.com)
challenge._

[Yubikey]: https://en.wikipedia.org/wiki/YubiKey
[Void Linux]: https://voidlinux.org/
