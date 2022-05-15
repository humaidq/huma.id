---
title: "Void Linux on the Lenovo ThinkPad T590"
date: 2020-07-04
url: /t590
aliases:
  - "/blog/thinkpad-t590"
---

For almost two years, I had been using the System76 Kudu laptop. It was huge
(17") and clunky for a university laptop, but I appreciated how you could just
install and run most Linux distributions with no hardware compatibility issues.
This gave me freedom to install any distribution without worrying much about
driver support. I switched away from the laptop, for reasons I explained on my
[blog post about the System76 Kudu](/blog/kudu-two-year/).

![A picture of the ThinkPad T590](laptop.jpeg)

ThinkPads are known for their reliability, many Linux enthusiasts and
businesses rely on ThinkPads due to the Linux support and durability of the
hardware (respectively, most businesses don't really care about Linux).

This is a blog post mostly inspired by [jcs's
style](https://jcs.org/2017/09/01/thinkpad_x1c), except it isn't mainly about
OpenBSD compatibility.

### OpenBSD

I attempted to install OpenBSD 6.6 on the ThinkPad. Installation was fine, but
it seems that it doesn't support the Wireless-AC 9560 even though it states
that it is supported by the [`iwm` driver](https://man.openbsd.org/iwm.4). I
had to manually install `iwm` using `fw_update`, but I still was unable to get
the driver loaded. The wireless driver appeared as an "unknown device" on
`dmesg`.

It would be nice to try OpenBSD as a daily driver at some point in the future,
but for now I'll keep on using [Void Linux], which is in some way more similar
to the BSD operating system family than other Linux distributions.

### Hardware

After browsing and comparing the ThinkPads on Lenovo's website, I picked the
T590 as it has a larger screen (15") than the T400s series (which is 14"). I
opted for a integrated graphics rather than a dedicated graphics card, as this
usually solves a lot of problems regarding graphics drivers, 16GB of RAM, 1TB
of SSD (NVMe).

I also went for the FHD (1920x1080) display, I love bitmap fonts (I use
[spleen]) and I don't care much about higher resolutions. Usually I face issues
regarding scaling with HiDPI displays, hence I am avoiding it for the near
future.

This is my first ThinkPad, so the TrackPoint and mousepad button placement is
new to me. I ended up not really using the TrackPoint, but the mousepad button
placement is something I found to be ergonomic.

On the left side of the laptop there are two USB-C ports (one of which is
Thunderbolt, with the slot for the docking station), a USB-A port, a regular
HDMI port, an audio jack (out), and a microSD reader.

On the right side of the laptop there is a Kensington security slot, a regular
Ethernet port, air vents, a USB-A port, and a smart card reader.

There is also the fingerprint reader on the right of the mousepad, an NFC
reader on the left of the mousepad, and a WWAN SIM slot on the back of the
laptop. The speaker is placed on the laptop above the keyboard, I found the
sound quality to be more than decent. Sound qualiy was certainly a big
improvement from the my previous System76 Kudu laptop.

The laptop build was solid, the keyboard is comfortable to use. The webcam has
a built-in cover, which is something I appreciate.

The media keys are enabled by default, if you need to use the function keys
you'll have to use the Fn key, or toggle the FnLock (with Fn+Esc). Luckily,
there is a BIOS option to make the Fn keys default, disabling the FnLock status
light. So it is possible to have the keyboard completely dark (except the power
button, which is separate from the keyboard).

### Linux support

| Component              | Works? | Notes                                                                              |
| ---------              | ------ | -----                                                                              |
| Intel graphics         | Yes    | With i915 Linux driver.                                                            |
| Bluetooth              | Yes    | Seems to work.                                                                     |
| TPM                    | Yes    | Uses TPM 2.0, which requires a different set of utilities.                         |
| Webcam                 | Yes    | With uvcvideo.                                                                     |
| Touchpad/TrackPoint    | Yes    | Works fine.                                                                        |
| Hibernation            | Yes    | Works fine without delays.                                                         |
| MicroSD reader         | Yes    | Realtek RTS522A works fine.                                                        |
| USB                    | Yes    | USB-C and Thunderbolt works supporting DisplayPort.                                |
| Wireless               | Yes    | Supported with iwlwifi.                                                            |
| Fingerprint reader     | **No** | Synaptics doesn't provide Linux drivers, and no open-source drivers are available. |
| WWAN (mobile internet) | **No** | Fibocom doesn't provide Linux drivers, and no open-source drivers are available.   |
| NFC                    | **No** | Not detected by `libnfc`.                                                          |

I faced a CPU throttling issue which can be fixed with [throttled], but this
seems to be resolved. The [Arch Wiki page on the
T590](https://wiki.archlinux.org/index.php/Lenovo_ThinkPad_T590) was very
useful.

*This is my fourth post in the [#100DaysToOffload](https://100daystooffload.com)
challenge.*

[Void Linux]: https://voidlinux.org/
[spleen]: https://github.com/fcambus/spleen
[throttled]: https://github.com/erpalma/throttled
