---
title: Status update, October 2019
date: 2019-10-19
url: /status-update-1
aliases:
  - "/blog/status-update-1"
---

A lot has been happening the last month, we have started working on the
largest group software development project at the University. We are a team
of six people, and have decided to choose [Go](/languages/go/) as our language
of choice for the implementation of the smart home system we are building.  

We have spend the first couple of weeks setting up the group in [GitLab] and
get continuous integration running (so we can have LaTeX PDF builds, and wiki
site deployed automatically). While setting up all the documentation for the
team and project, and specifying the software development process of the team,
we realised that there is no simple way and neat way to generate a Go project
documentation automatically -- something like JavaDoc or Doxygen. Using the
`go doc -all` command to generate documentation isn't great, as it simply
dumps the documentation in plain text, with no option to change the format.  

Some solutions I have found on the Internet is to run the `godoc` server
(which is what hosts Go's project homepage), then to use `wget` to download
the HTML pages. The downside of this process is:

1. Customising the template or layout of the pages is difficult, requiring
you to fork the project and change many lines of code.
2. The project has to be located in the `GOPATH`, otherwise it will not be
detected. Our project is usually hosted outside of the `GOPATH`, as we are
using Go modules.

I tried to find a documentation generator, and sadly Doxygen doesn't support 
Go -- which may be a good thing (some project members simply didn't like the
style of it). And we cannot use the [GoDoc] website as the projects are hosted
on a private GitLab group.[^1]

After some more searching, I found a project called [godoc2md] by Dave Cheney,
which promised to do exactly what I have wanted to do. After trying to get it
compiled and running, I have encountered many compilation errors, mostly due to
changes to the GoDoc package which the project depends on. So this seems like a
dead end.  

I have noticed the output of `go doc -all` is easily parsable, different lines
are formatted differently, which allows me to easily identify which section of
the documentation is a function declaration, description, etc. With this I can
write a simple program, using some regular expressions to detect different
parts and format them correspondingly. And [godoc2markdown] is born, although
it has some quirks which I am ironing out as the project progresses.  

I'll leave you with a picture of a project I have been working on, more details
to be released soon.

![A picture of a website, called Notes Overflow, with a list of University
courses, below it a number of the posts. On the navigation menu there is a
title of the website, and a login link.](notes-overflow-alpha.png)

That's all for this month!

[^1]: As we aren't allowed to post the project source publicly until the end of the course.

[GoDoc]: https://godoc.org/
[godoc2md]: https://github.com/davecheney/godoc2md
[godoc2markdown]: /projects/godoc2markdown/
[GitLab]: https://gitlab.com

