---
title: "How to Loopback Application Sound as an Input Source with PulseAudio"
date: 2021-05-03
---

This guide will show you how to loopback your computer's application sound as a
source in your meeting or calling software. There is probably a way to automate
or make this setup permanent, which is something I'd like to later figure out.

We'll first make a sink, we'll name `sink_mix`. This sink would mix mic and
application sound. This is done by loading the `module-null-sink`, with some
arguments (providing the name and properties).

```
pactl load-module module-null-sink sink_name=sink_mix sink_properties=device.description=sink_mix
```

We'll then loopback the mic sound into this new sink, this is done using the
`module-loopback`. We first need to find the source of the microphone, you can
list sources with:
```
pactl list sources
```

If you'd like to know what are the difference between sinks, sources, etc. I
recommend you check out Victor's post regarding [PulseAudio under the
hood](https://gavv.github.io/articles/pulseaudio-under-the-hood/#key-abstractions).

After finding the name, in my case, this is
"alsa_input.usb-BLUE_MICROPHONE_Blue_Snowball_797_2020_07_29_83297-00.mono-fallback".
In the next command, replace `<source>` with the name of your source.

```
pactl load-module module-loopback latency_msec=60 adjust_time=6 source=<source> sink=sink_mix
```

Using PulseAudio Volume Control (`pavucontrol`), we can see we can now set the
playback of specific applications to `sink_mix` instead of your default output
source. You can also under recording, set your source to "Monitor of sink_mix".

The issue now is that you are not able to listen to the playback, as it is only
sent to `sink_mix`, which you cannot hear without listening to yourself.

To solve this, we can use `module-combine-sink`, which allows us to direct any
output of this sink to multiple sinks (defined as "slaves").

We first have to find the name of your output (speakers) sink, this can be done
with:

```
pactl list sinks
```

In my case, this was "alsa_output.pci-0000_00_1f.3.analog-stereo", and was
listed as the first sink in the list. But this might vary depending on your
setup.

In the next command, replace `<speaker>` with the name of your output sink.

```
pactl load-module module-combine-sink slaves=<speaker>,sink_mix
```

When directing the playback of an application, make sure to select
"Simultaneous output to ..., sink_mix". Where the ellipsis would match your
speaker.

If you have any suggestions, please let me know in the mailing list below!
