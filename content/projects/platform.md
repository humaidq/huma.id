---
title: Platform
section: "Others"
date: 2020-08-28
language: Go
license: AGPL-3.0
site: https://github.com/hw-cs-reps/platform
Description: "A platform for posting announcements, tickets, and complaints for students"
Usability: 4
---

### Description

As a class representative for my class at university, I have built a platform
for class representatives to share information to students and allow them to
post tickets and complaints anonymously.

This project has been done in collaboration with my fellow class representative
(now school officer) [Alakbar](https://alak.bar).

### Functionality

This platform currently has the following functions:

- A home page with:
	- Links and resources
	- Alerts
	- List of class representatives
- Announcements page
	- Supports announcements written in Markdown, with tags support.
- Anonymous tickets
	- Allows students to anonymously post tickets and upvote them
	- Has a voter ID to anonymously track upvotes without storing sensitive
	  information or session.
- Complaints system
	- Allows students to anonymously send complaints directly to their
	  representatives.
	- Automatically detects the class representatives responsible for a
	  specific course.
- Moderation log
	- Logs class representatives administrative actions on the website for
	  transparency.
- Online configurator
	- Allows class representatives to update the website's configuration (such
	  as course and professor listing) online.

For more information and usage instructions, please visit the [project page on
GitHub](https://github.com/hw-cs-reps/platform).
