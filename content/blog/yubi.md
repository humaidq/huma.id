---
title: "Setting up a Yubikey on Void Linux"
date: 2020-06-03
draft: true
---

I recently got a [Yubikey], which is a hardware authentication device. It has
multiple functions, the Yubikey 4 has two slots which you can configure.
Getting the device to work on Void Linux wasn't obvious, this is a simple guide
on how to get a Yubikey working on [Void Linux].

First you need to install `dbus`, `eudevd`, and `elogind` if you haven't
installed it yet.

```sh
# xbps-install -Sy dbus eudevd elogind
``

You have to enable those services.

``sh
# ln -s /etc/sv/{dbus,eudevd,elogind} /var/service/
``

Now you need to install Yubikey packages:

```sh
# xbps-install -Sy u2f-hidraw-policy ykpers ykpers-gui
```

Now you'll have to restart your system. You can then plug in your key, and run
the `ykpers-gui` utility (or `ykpers` if you prefer the command-line).

The [Arch Wiki Yubikey article](https://wiki.archlinux.org/index.php/Yubikey)
has detailed examples on how you could setup your key.

[Yubikey]: https://en.wikipedia.org/wiki/YubiKey
[Void Linux]: https://voidlinux.org/
