---
title: iglü
section: "Others"
date: 2020-04-23
site: https://github.com/Nacdlow
Description: "A smart home system of the future (group project)."
Usability: 4
---

### What is this?

[**Check out our documentary (YouTube)**](https://www.youtube.com/watch?v=KMfItuTf2jQ)

As a part of a two-semester long Software Engineering project at Heriot-Wat
University, we (a group of six students) have been asked to create a fictitious
software engineering company which is building a smart home system of the
future to a client. During the 7 months we have built:

- A smart home system with a [plugin API (over RPC)](https://github.com/hashicorp/go-plugin)
  as a responsive (progressive) web application.
	- Includes a simulation module for testing.
- A Minecraft server ([Spigot]) plugin for testing and demonstrating the
  smart home system on an environment which we can control. Hooked using our
  plugin API.
- An internal wiki with training/learning material, log and recording of
  meetings, style guides, member roles, research and brainstorming, etc.
- A tool to allow us to generate Markdown documentation based on `go doc`, as
  no good solution exists.
- A custom DNS server which allows us to have specific responses to specific
  domains (for testing on mobile devices).
- A testing payments gateway with [Stripe].
- A custom Raspbian distribution for use with our Raspberry Pi (enclosed in our
  custom 3D-printed case), this enables iglü as a system service, and adds
  debugging functionality (Ethernet gadget, serial console, pre-setup WPA2
  Enterprise with wpa\_supplicant, etc).
- A plugin packager (with GUI) which speeds up cross-compiling, compressing and
  packaging plugins directly for the marketplace.
- A marketplace website, generated with a static website generator ([Hugo]).

### What tools were used?

The core parts of the project (such as the web application server and plugin
API) is written in [Go], but other languages have been used in different parts
of the project, such as Java for the Minecraft plugin, [LaTeX] for
collaborating on requirements specifications. Getting the e-ink display to work
required us to modify the [Waveshare driver](https://github.com/waveshare/e-Paper)
so we can display the output upside-down, which was a bit tricky. The program
to update the e-ink display was written in Python.

We even used tools such as [Adobe XD] for prototyping and usability testing,
[Tinkercad] for creating the iglü case which was 3D printed (thanks to
Edinburgh Hacklab). Other tools used were GIMP, Adobe Lightroom, Photoshop,
After Effects, Premiere Pro, and Illustrator, these were used in making
graphics, banners, logos, promotional video and other forms of artwork. We are
lucky to have a group with a diverse range of skills.

### Our group

The group consists of:

- [Alakbar Zeynalzade]\: Reporter and Organisational Manager
- [Amaanullah Akram]\: Organisational and Technical Manager
- [Humaid AlQassimi]\: Leader and Technical Manager
- [Mark S Bird]\: Liaison
- [Numan Ali]\: Technical Manager
- [Ruaridh Mollica]\: Organisational Manager


### Open-sourcing

The projects are still pending to be released under an open-source license.

The projects' source code can be found on our [GitHub organisation](https://github.com/Nacdlow).

[Alakbar Zeynalzade]: https://www.linkedin.com/in/alakbarzeynalzade/
[Amaanullah Akram]: https://www.linkedin.com/in/amaanakram/
[Humaid AlQassimi]: https://humaidq.ae
[Mark S Bird]: https://www.linkedin.com/in/mark-bird-/
[Numan Ali]: https://github.com/n-ali1
[Ruaridh Mollica]: https://www.linkedin.com/in/ruaridhmollica/

[LaTeX]: https://www.latex-project.org/
[Adobe XD]: https://www.adobe.com/products/xd.html
[Spigot]: https://www.spigotmc.org/wiki/about-spigot/
[Hugo]: https://gohugo.io
[Go]: https://go.dev
[Tinkercad]: https://www.tinkercad.com/
[Stripe]: https://stripe.com/

[AGPL license]: https://tldrlegal.com/license/gnu-affero-general-public-license-v3-(agpl-3.0)
