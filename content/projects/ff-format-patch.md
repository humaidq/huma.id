---
title: Fast-Forward with steps formatting
GitURL: ff-format-patch
section: "Command-line Tools"
MailingList: general
License: "GPL-2.0-or-later"
Language: C
date: 2019-10-24
IssueTracker: true
Description: "A patch for FF v2.3 to allow steps to be formatted for humans."
Usability: 4
aliases:
  - /ff
---

### 1. Description

This is a patch for [Fast-Forward](https://fai.cs.uni-saarland.de/hoffmann/ff.html)
which allows the steps to be formatted in a human-readable way, by providing a
'format file' as a parameter.

### 2. Requirements

The following packages must be installed on your system.

- Unix patch utility
- GNU Make
- A C compiler (defaults to gcc)
- GNU Bison
- flex

This patch is written for FF v2.3, and will probably not work with later
versions.

### 3. Copying and contributing

Fast-Forward is released under the GNU General Public License version 2 or
later, and so is the patch.

### 4. Downloading and patching

- [`steps-format-v1.patch`](steps-format-v1.patch) *(12K)*
- [`FF-v2.3.tgz`](https://fai.cs.uni-saarland.de/hoffmann/ff/FF-v2.3.tgz)
	*(72K)*

Extract FF, and copy the patch file in the extracted directory. Then run the
following command to apply the patch and compile:

```sh
$ patch < steps-format-v1.patch
$ make
```
Then you will have a binary with the patch.

### 5. Example Usage

The patch adds an additional parameter `-h` to the program, which allows you
to pass a 'format file.' For example:

```sh
$ ./ff -o domain.pddl -f prob.pddl -h problem-format.txt
```

And let's say we have a particular `personWalk` action:
```lisp
(:action personWalk
	:parameters
	(?from   - room
	 ?to     - room
	 ?person - person)
```
To format the output of this action, we can add the following to our format
file:
```text
PERSONWALK $2 walks from the $0 to the $1
```
Now that we run the command, we should get:
```text
[...]
ff: found legal plan as follows

step    0: PERSONWALK HUMAID walks from the KITCHEN to the LIVING-ROOM
[...]
```

### 6. Binary builds

Binary compiled and linked on `Linux kudu 4.19.0-6-amd64 #1 SMP Debian
4.19.67-2+deb10u1 (2019-09-20) x86_64 GNU/Linux`. Should work on most modern
Linux x86_64 glibc systems.  

- [`ff`](ff) *(936K)*

### 7. Change log

- v0.1 *(Oct 24 2019)*
  - Initial release
