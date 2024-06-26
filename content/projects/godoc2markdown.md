---
title: godoc2markdown
GitURL: https://github.com/humaidq/godoc2markdown
Language: Go
date: 2019-10-11
Description: "A program which converts Go Doc output to Markdown."
url: /godoc2markdown
aliases:
  - /projects/godoc2markdown
---

### 1. Description

This is a simple Unix-like tool which allows you to pipe the output of `go doc`
to generate Markdown.

The purpose of this tool is to allow private Go projects generate Markdown
documentation, where websites like [GoDoc](https://godoc.org) has no access
to the repository.

### 2. Requirements

The following packages must be installed on your system.

- Go
- Git
- GNU Make

### 3. Copying and contributing

This program is written by Humaid AlQassimi,
and is distributed under the BSD 2 Clause license.

### 4. Download and install

```sh
$ git clone https://git.sr.ht/~humaid/godoc2markdown
$ cd godoc2markdown
$ make install
```

### 5. Example Usage

If you want to generate a Markdown of the package in the current directory,
and save it to a file, you can run.

```sh
$ go doc -all . | godoc2markdown > DOCUMENTATION.md
```

### 6. Change log

- v0.1 _(Oct 11 2019)_
  - Initial release
