---
title: 'Jukebox Hopper Mod'
GitURL: jukeboxhopper
MailingList: general
section: "Games"
License: BSD-2-Clause
Language: Java
date: 2022-05-15
Description: "A simple Minecraft mod which allows you to use hoppers to insert records into jukeboxes."
Usability: 4
LatestVersion: "v2.0.0"
Image: /projects/screenshots/JukeboxHopperMod.webp
ImageAlt: "Picture of a hopper on top of a jukebox in Minecraft"
site: https://modrinth.com/mod/jukeboxhopper
url: "/jb"
aliases:
  - "/projects/jukeboxhoppermod"
---

### 1. Description

{{< image >}}

This is a simple Minecraft mod which allows players to use
a hopper to insert a record into a Jukebox.  

### 2. Download and usage

Place the mod jar file into the `mods` folder.
You can download the mod from [Modrinth](https://modrinth.com/mod/jukeboxhopper).


### 3. Building

To build you need Java JDK installed. Then you are able to build using
`./gradlew build`. The output JAR can be found in `build/libs`.

For testing, you may run `./gradlew runClient`. This would immediately
run Minecraft with the mod pre-loaded.

### 4. Changelog

- v2 (May 15, 2022)
  - Switched to using Fabric Mod Loader and Mixins.
  - Supports Minecraft 1.18.2.
  - Logic fixes.
- v1 (Dec 17, 2018)
  - Initial release. Works with Minecraft 1.12, requires MCP and
    manually creating the mod.

### 5. To-Do

- Allow extracting music discs from jukeboxes.
