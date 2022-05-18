---
title: 'hplayer'
GitURL: hplayer
MailingList: general
License: BSD-2-Clause
Language: bash
date: 2020-11-29
Description: "Humaid's Mod Player (FFplay backend) written in Bash"
Usability: 4
Screenshot: "hplayer.webp"
url: "/hplayer"
---

### 1. Description
![Screenshot of a terminal running with the hplayer script running. The first
line output from the program is the name of the program in green text, which is
"Humaid's Mod Player", the second line says "Press 'h' for help" in grey
text. The third line shows the music that is started to play in yellow
text, stating "Playing ./droid.mod". Then there is a help menu listing. Final
line shows a "PAUSED" text.](/projects/screenshots/hplayer.webp)

This is a simple mod player manager, which uses FFplay in the backend. It simply
shuffles the mod music files in the directory and plays them.

It allows you to easily pause and resume the music with convenient key-bindings.

### 2. Prerequisites

You will need `ffmpeg` installed and the `ffplay` binary in the system's path.

And of course, you will need music files. You can find many on [Mod
Archive](https://modarchive.org).

### 3. Usage

Clone the repository, and place music files in the directory.
Simply run the script with `./player`. Press `h` on your keyboard to list all
available commands.
