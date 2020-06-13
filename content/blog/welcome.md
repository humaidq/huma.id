---
title: My new website & blog
date: 2018-07-23
---
Welcome to my newly designed website, which includes a Git projects page, a blog, a gallery and my contact information.
The website used to run on a web server which I wrote using the Go programming language, and had a login page with GitHub
authentication. But I do not have a reason anymore to have a dynamic website[^1], it is possible to have a website which is
static and be able to host all the content I need. The website you are accessing now is a static website generated using an
amazing generator called [Hugo]. This helps me focus more on the content of the website rather than maintaining the web server code.

### The changes in the redesign
The previous website used Bootstrap, a bunch of JavaScript libraries and a couple of fonts. This makes my simple website heavy.
In my redesigned website, all the CSS is written minimally to keep the website simple and fast.  

The new redesign is over a thousand times lighter than my older version (when loading a page), but contains more content
than my older website. It seems like everyday websites are "upgrading" their website design to make it heavier to load, which
is a bad trend. I would like to prove that it is possible to have a light website without compromising content and design.  

### My new projects page
GitHub used to be where all my open-source projects are hosted, and I was using their services as early as 2013. It was the perfect
place to host my projects and to collaborate. However when Microsoft bought GitHub in June 2017[^2], I immediately moved away. Microsoft 
waged a war against Linux and the open-source software movement in the past[^3], which caused my distrust in the company.
~~Self-hosting my own repositories seems like a better option for me, even though it is not the perfect solution to the problem.~~
I have migrated all my git repositories to [SourceHut] which is a great and
powerful alternative.

### The gallery
I have deleted my Instagram account over a month ago, as the service is becoming more "Facebook". Instagram used to be a good place to
host pictures years ago. With my new website generated with Hugo, I am able to easily create a gallery and host pictures on my website.
This allows me to categorise and tag my pictures any way I want, license my pictures under a Creative Commons license, and even allow
people to download the full image file -- something I cannot do using Instagram. Having everything hosted on my website allows more control
on how the content is displayed and presented.  

### The blog and other posts
I always wanted to have a blog, but I was not satisfied with all the solutions available and I didn't have enough time to make a proper solution.
Hugo solves this problem, all my website is written in either Markdown or Emacs org-mode -- including my blog. This makes managing the content on
my entire site easier. Now my projects are categorised depending on the
language used and license, and implementing that was trivial with Hugo.


[Hugo]: https://gohugo.io/
[SourceHut]: https://sourcehut.org
[^1]: As in [server-side dynamic web pages](https://en.wikipedia.org/wiki/Dynamic_web_page)
[^2]: You can find more information about the acquisition at [The GitHub Blog](https://blog.github.com/2018-06-04-github-microsoft/)
[^3]: There is a good web page explaining this on [cosmicpenguin.com](https://web.archive.org/web/20190412193814/http://www.cosmicpenguin.com/linux/MICROSOFTS_WAR_AGAINST_LINUX.html)
