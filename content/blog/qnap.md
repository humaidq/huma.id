---
title: "Installing FreeNAS on my QNAP TS-459"
date: 2020-06-15
draft: true
---

About four years ago I got the QNAP TS-459 as a network-attached storage (NAS)
so I can store family pictures and backups of our devices. It came with QNAP
QTS, which is the NAS user interface. I came across many issues with the
responsiveness of this UI, as it tries to replicate a desktop environment with
floating panes. It was slow, hard to navigate, and had many bugs.

Recently, one of the four hard drives on the RAID5 array failed, and it isn't
long until failures pile up. This is when I regretted having a ClamAV scan run
every week, which was very pointless and reckless to the wear-and-tear of the
drives. Lesson learned!

The drives installed were 5TB Seagate Enterprise Capacity 3.5 HDD (v4), and
since it is a bad idea to keep using these drives, I am ordering new ones after
installing [FreeNAS]. Luckily, the system was not vendor-locked, and allows
users to boot from a USB for recovery[^1]. 

The NAS drive has an HDMI output for its media center. Pressing `Del`
while booting the system loads the BIOS, where I could specify the boot order.
Unfortunately, I was not able to find the key which opens the boot menu
directly, and the BIOS doesn't allow me to boot directly to a device. So I set
the USB device to have priority over the internal flash storage.

I booted [Void Linux] so I could check the partitions and see how the system
was running (since I had a formatted USB laying around), and it seems the
entire system runs on half of gigabyte of flash storage.

So that works, next I downloaded FreeNAS 11.3 and formatted it to a USB stick,
I plugged in the installation USB and a second USB which I'll use for the
installation. The installation went smoothly and it booted to the FreeNAS
selection menu.

After plugging in the Ethernet, I visited the NAS IP address, lo and behold, we
are greeted by a FreeNAS login page.

![A screenshot of the FreeNAS login form on a browser](login.png)

And the dashboard...

![A screenshot of the FreeNAS dashboard, displaying the system information, the
system load, memory available (which is 4 gigabytes), and the connected
Ethernet interface](dashboard.png)

Since FreeNAS has no issues detecting the drives, the next step is going to be
purchasing new drives to use with this setup.

[^1]: QNAP also provides a wiki page on [booting a recovery disk](https://wiki.qnap.com/wiki/Firmware_Recovery#Instructions_for_NAS_Recovery)
  and [installing Debian](https://wiki.qnap.com/wiki/Debian_Installation_On_QNAP)
  on their systems.

[Void Linux]: https://voidlinux.org/
[FreeNAS]: https://www.freenas.org/
