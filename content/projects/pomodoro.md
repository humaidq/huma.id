---
title: Pomodoro
GitURL: c-pomodoro
section: "Command-line Tools"
MailingList: general
License: BSD-2-Clause
Language: C
date: 2019-04-07
GoDoc: false
IssueTracker: true
LatestVersion: v0.1
Description: "A suckless pomodoro application written in C."
Usability: 1
draft: true
---

### 1. Description

This is a suckless pomodoro command-line application I created, as I couldn't
find any good pomodoro command-line application.

### 2. Requirements

The following packages must be installed on your system.

- tcc (you need to modify Makefile to use a different compiler)
- make
- git

### 3. Copying and contributing

This program is written by Humaid AlQassimi,
and is distributed under the BSD 2 Clause license.  

### 4. Download and make

```sh
$ git clone git.sr.ht/~humaid/c-pomodoro
$ cd c-pomodoro
$ make all
```

### 5. Usage

```sh
$ ./pomodoro
```

### 6. Configuration

To configure the timing, you have to modify the values in the header file
`pomodoro.h`, and recompile.

### 7. Change log

- v0.1 *(Apr 7 2019)*
  - Initial release
