---
title: Learning Bot
date: 2019-06-04
site: https://github.com/peergramming/learning-bot
Description: "A GitLab bot for providing programming advice based on code repair tools."
Language: Go
url: /lb
aliases:
  - /projects/learning-bot
  - /learning-bot
---

### Overview

The aim of this project is to create a GitLab bot which would download students
code and generate a report containing advice on repairing issues found in the source code.

This project is developed as an internship project at Heriot-Watt University.

### Description

This program uses [checkstyle] list the issues found in the students' code. The
program parses that output and generates a report, posting it in the GitLab
issue tracker of that project.

Configuration is simple, and no database is required (when using SQLite). A bot
user has to be created first on GitLab, and it must be added to the Learning
Bot configuration.

The Learning Bot checks multiple repositories concurrently, and the maximum
number of workers can be defined in the configuration file.

More details on setting up is available on the [GitHub project page](https://github.com/peergramming/learning-bot).

[checkstyle]: https://checkstyle.org/
