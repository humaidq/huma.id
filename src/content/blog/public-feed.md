---
title: "My Public News Feed"
pubDate: 2020-07-12
description: "My public news feed with sfeed and openring"
slug: public-feed
---

For the past months, I used [openring] to generate the webring section you see
on all the blog pages. I found myself checking my site's blog section to see
whether the blogs I added on openring had posted something new, so I had to
setup a proper news aggregator.

I took another look at [sfeed], which I used before. I previously had it setup
with all the blog posts from [the Free Writers
Club](https://lists.sr.ht/~sircmpwn/free-writers-club/%3C20191215210525.GA40863%40Levs-iMac.local%3E),
but I lost my configuration (or had misplaced it).

Now sfeed is configured on this website's project and it is hosted on
[/sfeed.html](/sfeed.html), so not only I could view my feed on any device,
but I could share it with friends.

![A screenshot of the sfeed page, showing a list of blog posts from different blogs that I follow](./public-feed/sfeed.png)

With [Tridactyl], I could use vim-like shortcuts on Firefox when loading the
page, so that is convenient.

You can also check the [sfeedrc] file.

_This is my sixth post in the [#100DaysToOffload](https://100daystooffload.com)
challenge._

[openring]: https://git.sr.ht/~sircmpwn/openring
[Tridactyl]: https://github.com/tridactyl/tridactyl
[sfeed]: https://codemadness.org/git/sfeed/file/README.html
[sfeedrc]: https://git.sr.ht/~humaid/humaidq.ae/tree/94bb33b8bbdcc52e156b9e995516e95aedc138b7/sfeedrc
