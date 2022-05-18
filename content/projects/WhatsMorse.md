---
title: WhatsMorse
GitURL: whatsmorse
MailingList: general
section: "Web Applications"
License: MIT
Language: Go
date: 2018-01-06
site: https://morse.hmksq.ae
GoDoc: true
HasBuilds: true
Screenshot: "WhatsMorse.webp"
Description: "A morse code web messaging application written in a two-hour hackaton."
Usability: 4
url: /morse
aliases:
  - /whatsmorse
  - /projects/whatsmorse
---
### 1. Description
![Screenshot of WhatsMorse page](/projects/screenshots/WhatsMorse.webp)

WhatsMorse is a web messaging application which translates all your messages to morse code written in a two hour ["Stupid" Hackathon by Transcend](https://www.meetup.com/transcenddubai/events/245505285/) in January of 2018.
The goal of the hackathon was to create something useless (can be anything, not limited to computer software).  

The web app can be accessed from the URL of the project above.

### 2. Requirements

The following packages must be installed on your system.

- Go
- Git

### 3. Copying and contributing

This program is written by Humaid AlQassimi, and is distributed
under the MIT license.  

### 4. Download and install

```sh
$ go get -u git.sr.ht/~humaid/whatsmorse
$ go install git.sr.ht/~humaid/whatsmorse
```

### 5. Usage
To run the web app, `$PORT` must be set in the enviornment.
```sh
$ export PORT=8080
$ whatsmorse
```
The web app will be accessible at `http://localhost:8080`.

