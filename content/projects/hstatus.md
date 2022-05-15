---
title: hstatus
GitURL: hstatus
section: "Others"
License: BSD-2-Clause
Language: Rust
date: 2020-04-12
LatestVersion: v0.2
HasBuilds: true
MailingList: general
IssueTracker: false
Description: "A dwm status monitor updater with multiple timezones and low battery flair."
Usability: 4
url: /hstatus
aliases:
  - /hstat
  - /projects/hstatus
---

### 1. Description

hstatus is a simple dwm status monitor updater. It currently includes:

- Multiple timezones (Local and UK time, using [chrono])
- Battery status
- Load status
- Low battery flair

The reason for creating this project was to learn [Rust].

[chrono]: https://crates.io/crates/chrono
[Rust]: https://www.rust-lang.org/

### 2. Requirements

The following packages must be installed on your system.

- Rust and Cargo
- Git
- libX11-devel
- dwm _(obviously)_

### 3. Copying and contributing

This program is written by Humaid AlQassimi, and is distributed under the BSD 2
Clause license.  

### 4. Download and build

```sh
$ git clone https://git.sr.ht/~humaid/hstatus
$ cd hstatus
$ cargo build
```

### 6. Change log

- v0.1 *(Apr 12 2020)*
  - Initial release
- v0.2 *(Sep 9 2020)*
  - Added low battery flair
  - Remove COVID stats
  - Separated status items in standalone functions
