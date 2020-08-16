---
title: "Detecting the Empty Character in Go"
date: 2020-07-29
---

I have recently been working on an online ticketing system. I have been using
`strings.TrimSpace` for a while, and it works well. I tested
it with the "empty character" from
[emptycharacter.com](https://emptycharacter.com/), and it failed to detect
whatever whitespace characters it was using.

I thought it was just `strings.TrimSpace` not detecting different types of
Unicode's empty characters. So I replaced it with
`strings.TrimFunc(s, unicode.IsSpace)`, and it still didn't clear the
spaces[^2].

Disecting that empty character, we find it actually made up of five different
characters:

- `U+200F`: Right-To-Left Mark
- `U+200F`: Right-To-Left Mark
- `U+200E`: Left-To-Right Mark
- `U+0020`: Regular Space
- `U+200E`: Left-To-Right Mark

We can see that it is using a control character to prevent the regular space
from being trimmed.

However, Go doesn't list these characters as control characters[^1], so we
cannot use `unicode.IsControl`. But it is included in the
`unicode.Bidi_Control` subset. Here's my first solution:

```go
func isImproperChar(r rune) bool {
	return unicode.IsSpace(r) || unicode.In(r, unicode.Bidi_Control)
}

strings.TrimFunc(s, IsImproperChar)
```

This would trim away at bi-directional control characters, which is probably
a really bad idea especially in systems supporting Arabic, Hebrew, or other
right-to-left languages.

So we can just trim it to measure the length, then discarding the trimmed
result.

```go
func IsEmpty(s string) bool {
	return len(strings.TrimFunc(s, func(r rune) bool {
		return unicode.IsSpace(r) || unicode.In(r, unicode.Bidi_Control)
	})) == 0
}
```

Try it out on [the Go playground](https://play.golang.org/p/S74NV_KP0Xv)!

Have a better solution? Please let me know!


*This is my eighth post in the [#100DaysToOffload](https://100daystooffload.com)
challenge.*

[^1]: Not listed on
[unicode/tables.go:7108](https://golang.org/src/unicode/tables.go#L7108) as
`pC` (control character), but rather it's included in the
[Bidi_Control](https://golang.org/src/unicode/tables.go#L5673) subset.
[^2]: I thought `unicode.IsSpace` wasn't detecting detecting some types of
spaces. But after [some testing](https://play.golang.org/p/S6T9gK5f8lw), that
doesn't seem to be the case.
