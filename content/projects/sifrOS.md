---
title: sifrOS
GitURL: sifros-mklive
section: "Others"
MailingList: general
License: BSD-2-Clause
Language: Bash
date: 2018-06-22
Description: "A secure and minimal Linux distribution."
Usability: 2
url: /sifros
aliases:
  - /projects/sifros
---

### 1. Purpose
The goal of sifrOS is to be a Linux distribution (based on 
[Void](https://voidlinux.org)) with more secure default configuration.  

Documentation of installation and configuration is planned.

**Note**: This is not maintained and not very usable of yet. There are future
plans in making this a more installable system.

#### 1.1. Features and Goals

- Few pre-installed packages (~130)
- Uses minimal software, such as;
	- musl (libc) instead of glibc ([comparison](https://www.etalabs.net/compare_libcs.html))
	- runit instead of systemd
	- [xbps](https://github.com/void-linux/xbps)
- A clear and easy to follow documentation, that explains; *(TODO)*
	- installation (with btrfs + LUKS full-disk encryption)
	- setting up networking and ntp
	- setting up a desktop environment (xorg, dwm, st)

### 2. Requirements for building

The following packages must be installed on your system.

- xbps
- xbps-reconfigure
- qemu-user-static
- squashfs-tools
- xorriso

### 3. Copying and contributing

This is a fork of [Void Linux live image maker](https://github.com/void-linux/void-mklive)
which is written by Juan RP, Dave Elusive and 
[Void contributors](https://github.com/orgs/void-linux/people) and is distributed 
under the BSD 2 Clause license.

### 4. Building

To build a sifrOS iso, run build script as root.

```sh
# ./build-sifrOS.sh
```
