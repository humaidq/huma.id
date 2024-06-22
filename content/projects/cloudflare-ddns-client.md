---
title: Cloudflare DDNS Client
GitURL: https://github.com/humaidq/cloudflare-ddns-client
Description: "A simple Cloudflare Dynamic DNS Client."
Language: Go
date: 2020-06-10
url: /ddns
aliases:
  - "/projects/cloudflare-ddns-client"
---

### 1. Description

This is a simple Cloudflare Dynamic DNS client, which updates a record to the
current public IP address. I have created this as I couldn't find a very simple
solution to this very simple problem.

### 2. Requirements

The following packages must be installed on your system.

- Go _(tested with 1.14)_

### 3. Installation and Usage

```
$ go install git.sr.ht/~humaid/cloudflare-ddns-client
$ export APIKey=<API KEY here>
$ export Zone=<Zone ID here>
$ export RecordName=<Full record name here, e.g. foo.example.com>
$ cloudflare-ddns-client
```

You will have to [create an API token](https://dash.cloudflare.com/profile/api-tokens)
which has the permission to edit zone DNS (`Zone.DNS`).

This program will check every minute unless interrupted.

### 4. Changelog

- v0.2.0 (Jan 20, 2021)
  - IPv6 Support (added by [Jack Dallas](https://git.sr.ht/~dallas/))
- v0.1.0 (Jun 17, 2020)
  - Initial release
