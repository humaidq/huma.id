# huma.id

<div align="center">
    <h3 align="center">huma.id website</h3>
    <p align="center">Source of my personal website</p>
</div>

## Description

The source of my personal website, which includes a list of my projects, a
blog, a recipes page, and more.

The website is generated using [Hugo].

## Prerequisites

- [Nix](https://zero-to-nix.com/start/install) (with flakes enabled)
- Optional: [nix-direnv]
  - If not using nix-direnv, you need to run `nix develop` to load
    dependencies in your shell.

## Building

To build without cloning:

```
nix build github:humaidq/huma.id
```

The output would be in `./result`.

## Usage

This package is imported by [dotfiles] repository.

[dotfiles]: https://github.com/humaidq/dotfiles
[Hugo]: https://gohugo.io
[nix-direnv]: https://github.com/nix-community/nix-direnv
