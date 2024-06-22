---
title: hstatus
GitURL: https://github.com/humaidq/hstatus
License: BSD-2-Clause
Language: Rust
date: 2020-04-12
Description: "A dwm status monitor updater with multiple timezones and low battery flair."
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

- v0.1 _(Apr 12 2020)_
  - Initial release
- v0.2 _(Sep 9 2020)_
  - Added low battery flair
  - Remove COVID stats
  - Separated status items in standalone functions
