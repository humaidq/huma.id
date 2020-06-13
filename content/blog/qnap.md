---
title: "Installing Linux on my QNAP TS-459"
date: 2020-04-28
draft: true
---

About four years ago I got the QNAP TS-459 as a NAS so I can store family
pictures and backups of our devices. It came with QNAP QTS, which is the NAS
user interface. I came across many issues with the responsiveness of this UI,
as it tries to replicate a desktop environment with windows (as in panes, not
the operating system). This UI is sometimes slow, confusing to navigate as I
have to learn yet another interface, and has bugs (such as when the backup
program wizard always hangs).

I wished to have a standard Linux system which I can operate, rather than using
this interface with their proprietary software.

Recently, one of the four hard drives on the RAID5 array failed, and it isn't
long until failures pile up. This is when I regretted having a ClamAV scan run
every week, which was very pointless and wreckful to the wear and tear of the
drives.

The drives installed were 5TB Seagate Enterprise Capacity 3.5 HDD (v4), and
since it is a bad idea to keep using these drives, I am ordering new ones after
installing Linux on the machine. Luckily, the manufacturer did not disable the
BIOS, and allows users to boot from a USB for recovery[^1]. I am a big fan of
[Void Linux] as it is simple to use and fast, the [runit] init scheme allows me
to define services as simple shell scripts, rather than INI files[^2].

Luckily the NAS drive has an HDMI output for the media center. Pressing `Del`
while booting the system loads the BIOS, where I could specify the boot order.
Unfortunately, I was not able to find the key which opens the boot menu
directly, and the BIOS doesn't allow me to boot directly to a device. So I set
the USB device to have priority over the internal flash storage.

After booting Void Linux, I found three partitions on the system. These show on
Void as:

- `/dev/loop1` (730M): This is where the root parition of the system is stored.
- `/dev/loop2`: This contains an archive of the firmware, which I assume is
  used for a firmware reset.
- `/dev/sdb` (429M): This contains the boot loader.

On the QNAP wiki, it shows these drives appear as `/dev/mtdblock{1,2,3}` (as in
Memory Technology Devices). I am clueless to why two of the devices
automatically load as loop devices.


[^1]: QNAP also provides a wiki page on [booting a recovery disk](https://wiki.qnap.com/wiki/Firmware_Recovery#Instructions_for_NAS_Recovery)
  and [installing Debian](https://wiki.qnap.com/wiki/Debian_Installation_On_QNAP)
  on their systems.
[^2]: systemd uses INI files for configuration, which I find less
  comprehensible compared to a simple shell script.

[Void Linux]: https://voidlinux.org/
[runit]: http://smarden.org/runit/
