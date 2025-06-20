---
title: "Accessing my Laptop Anywhere on iOS through Tailscale"
pubDate: 2022-05-06
description: "Accessing my laptop through Tailscale"
url: "/tailscale"
---

For a really long time, I wanted to access my files from anywhere, and unfortunately
there are no applications to securely[^1] sync files between my phone and
computer. Also, keeping a copy of my files on my phone didn't seem wise from
an operational security standpoint.

I was introduced to [Tailscale](https://tailscale.com/) at `$WORK`,
and finally found a use-case for it at home. Tailscale has an
[iOS client](https://tailscale.com/kb/1020/install-ios/) which works really
well, and combined with an iOS SSH client, I am able to `ssh` into my computer.
I use [Terminus](https://apps.apple.com/us/app/termius-terminal-ssh-client/id549039908),
which also allows me to also access files over SFTP.

So far, I prefer to regularly `ssh` and view the files on the terminal, as I
don't have to download the files just to view them (and iOS doesn't come with a
basic text editor!).

### Setting up Tailscale on NixOS

I have recently started switching my systems to NixOS, so I have a reproducible
setup across multiple computers.

On NixOS, enabling Tailscale and OpenSSH is easy, just define:

```nix
services.tailscale.enable = true;
services.openssh = {
  enable = true;
  # Only allow authentication using SSH keys.
  passwordAuthentication = false;
  permitRootLogin = "no";
};
```

After rebuilding the system, I can simply run `doas tailscale up` to
authenticate. Once Tailscale is installed and authenticated on my iPhone, the
two devices can see each other (run `tailscale status` on Linux).

Next, I put my iPhone's SSH public key in `~/.ssh/authorized_keys`, and now I
can access my laptop anywhere (as long as I keep the lid open, of course!).

[^1]:
    Dropbox and alternatives (that work with iOS) do not have E2E encryption,
    and they don't guarantee that they will not tamper you files.
