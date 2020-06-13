---
title: Contribution Guidelines for Go projects
BackNav: 1
---

Make sure to run '`go fmt ./...`' in the project's root
directory before committing your changes. This formats
your code according to Go's formatting style automatically.  

Many of the Go projects hosted have a `Makefile` which automatically
does the formatting, so you should make sure to run `make` before committing,
making sure the project is formatted properly, and the tests/build are
successful.

Be sure to document exported variables and functions, so documentation could
be generated.
