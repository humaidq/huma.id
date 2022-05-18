---
title: 4DG
GitURL: _4dg
section: "Web Applications"
MailingList: general
License: "GPL-3.0-only"
Language: Go
date: 2018-05-16
GoDoc: true
HasBuilds: true
Screenshot: "4DG.webp"
Description: "A 4D movie scripting program which runs on a Raspberry Pi using GPIO."
Usability: 1
url: /4dg
aliases:
  - "/projects/4dg"
---

### 1. Purpose
![A picture of 4DG control panel](/projects/screenshots/4DG.webp)

**Note:** Some work is needed to be done before this project is usable.

The goal of this program is to allow anyone to create a 4D movie script. When run on a Raspberry Pi, the program will allow you to control Raspberry Pi's GPIO pins.  

The program can be controlled using a web interface, and is written in Go.  

### 2. Requirements

The following packages must be installed on your system.

- Go
- Git

A Raspberry Pi is also preferred, otherwise the program would
run in simulation mode.

### 3. Copying and contributing

This program is written by Humaid AlQassimi, and is distributed under
the GPLv3.


### 4. Download and install

```sh
$ go get -u git.sr.ht/~humaid/_4dg
$ go install git.sr.ht/~humaid/_4dg
```

### 5. Usage
If running on a Raspberry Pi, the program should run as
root, otherwise GPIO couldn't be accessed.

```sh
$ _4dg run
```

### 6. To-Do

- Unit testing
- Finish player interface
- Add different position format

