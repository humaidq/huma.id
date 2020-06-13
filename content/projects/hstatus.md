---
title: hstatus
GitURL: hstatus
section: "Others"
License: BSD-2-Clause
Language: Rust
date: 2020-04-12
LatestVersion: v0.1
HasBuilds: true
MailingList: general
IssueTracker: false
Description: "A dwm status monitor updater with multiple timezones and COVID19 stats."
Usability: 4
---

### 1. Description

hstatus is a simple dwm status monitor updater. It currently includes:

- Multiple timezones (Local and UK time, using [chrono])
- Battery status
- Load status
- COVID19 status (with [caching], updates every 6 hours)

The reason for creating this project was to learn [Rust].

[chrono]: https://crates.io/crates/chrono
[caching]: https://crates.io/crates/cached
[Rust]: https://www.rust-lang.org/

### 2. Requirements

The following packages must be installed on your system.

- Rust and Cargo
- Git
- libX11-devel
- dwm _(obviously)_

And if you decide to keep the COVID19 status:

- libressl-devel (or your system's equivalent)
- curl

### 3. Copying and contributing

This program is written by Humaid AlQassimi,
and is distributed under the BSD 2 Clause license.  

### 4. Download and build

```sh
$ git clone https://git.sr.ht/~humaid/hstatus
$ cd hstatus
$ cargo build
```

### 6. Change log

- v0.1 *(Apr 12 2020)*
  - Initial release

