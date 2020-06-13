---
title: 'Jukebox Hopper Mod'
GitURL: jukeboxhopper
MailingList: general
section: "Games"
License: None
Language: Java
date: 2018-12-17
Screenshot: "JukeboxHopperMod.gif"
Description: "A simple Minecraft mod which allows you to use hoppers to insert records into jukeboxes."
Usability: 4
---

### 1. Description
![Picture of mod in-game](../screenshots/JukeboxHopperMod.gif)

This is a simple Minecraft mod which allows players to use
a hopper to insert a record into a Jukebox.  

### 2. Requirements

Requirements of using this mod:

- [Mod Coder Pack](https://minecraft.gamepedia.com/Programs_and_editors/Mod_Coder_Pack) for 1.12
- [Minecraft](https://minecraft.net) 1.12
- Java 8

### 3. Installation

1. Copy the `src` directory into your MCP workspace.
2. Locate the method `transferItemsOut()` in `net.minecraft.tileentity`.
3. Add the following snippet at the beginning of the method:

```java
// Make sure to import the package
if(JukeboxHopperMod.canTransferRecord(this)){
    JukeboxHopperMod.transferRecord(this);
    return true;
}
```

You should be able to have compile and run the game.  

This is tested to work with Minecraft 1.12, it is possible to use
this mod with other versions but may require some alternations
to the code.
