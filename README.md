<div align="center">
    <h1>huma.id</h1>
    <p>Source of my personal website</p>
    <a href="https://builtwithnix.org"><img src="https://builtwithnix.org/badge.svg" /></a>
</div>

## Description

The source of my personal website, which includes a list of my projects, a
blog, a recipes page, and more.

The website is generated using [Hugo].

## Prerequisites

- [Nix](https://zero-to-nix.com/start/install) (with flakes enabled)
- Optional: [nix-direnv]
  - If not used, you need to run `nix develop` to load dependencies in your
    shell.

## Building

To build the site:

```
nix build
```

## Usage

This Nix flake is imported by my [dotfiles] repository, which hosts this
website.

[dotfiles]: https://github.com/humaidq/dotfiles
[Hugo]: https://gohugo.io
[nix-direnv]: https://github.com/nix-community/nix-direnv
