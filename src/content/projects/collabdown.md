---
title: CollabDown
gitURL: collabdown
section: "Others"
pubDate: 2021-02-16
programmingLanguage: JavaScript
license: BSD-2-Clause
latestVersion: "v1.2.2"
description: "Browser extension which allows downloading and speeding up Bb Collaborate recordings."
usability: 4
slug: collabdown
---

### 1. Description

![A screenshot of the side panel opened on Bb Collaborate's website, with the download recording list shown as added by CollabDown addon.](./screenshots/collabdown.png)

CollabDown allows users to download recordings from Bb Collaborate (Ultra) by
adding a Download Recording item on the side menu.

It also adds a playback speed button in the playback controls, so you can speed
up the recording playback.

Add to your browser:
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/collabdown/) /
[Chrome](https://chrome.google.com/webstore/detail/collabdown/ffgphkdmeoodlppmdmlonohncngfgnnk)

### 2. Requirements

The following programs should be installed on your system to bundle and test
the extension.

- web-ext

### 3. Copying and contributing

The program is written by Humaid AlQassimi, and is distributed under BSD 2
Clause license, unless stated otherwise.

The SVG icons bundled with the program are provided by Font Awesome, which is
distributed under the SIL OFL 1.1 license.

### 4. Bundling and testing

You can test the extension on a temporary Firefox profile by running:

```
$ web-ext run
```

To create the bundle:

```
$ web-ext build
```

Which will build the artefact, which you may upload to the extensions store.

### 5. Changelog

- v1.2.1 (Jan 17 2021)
  - Fixes tool-tip placement for playback button
- v1.2 (Jan 17 2021)
  - Video pauses when download button is clicked
  - Adds a playback speed toggle button
- v1.1 (Nov 13 2020)
  - Initial release
