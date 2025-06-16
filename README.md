# marwinwijaya.github.io
Web CV &amp; Portofolio Muhamad Arwin Wijaya (http://marwinwijaya.github.io)

## Purpose
This repository contains the source for my personal portfolio website. It is a
static site hosted via GitHub Pages showcasing my curriculum vitae and side
projects.

## 404 Page

A custom `404.html` page provides a friendly message when visitors navigate to an unknown route. GitHub Pages automatically uses this file when present in the repository root.

## Local Preview
You can preview the site locally by cloning this repository and serving the
files with any static server. For example, with Python installed:

```bash
python3 -m http.server
```

Then browse to `http://localhost:8000` to view the site. Updates pushed to the
`main` branch are automatically published through GitHub Pages.

## Updating Styles and Scripts
Custom styles are authored in the `scss/` directory using Sass and compiled to
`css/style.css`.
JavaScript sources live in `js/` with minified versions committed for
production. Edit the unminified files (`custom.js`, `scripts.js`) and re-minify
them using your preferred tool before committing.

The site depends on [Bootstrap](https://getbootstrap.com/), jQuery, and several
jQuery plugins located in `js/vendor/`.

## Performance
Static assets are cached using a simple Service Worker (`sw.js`) registered on
page load. This enables repeat visits to load faster and allows basic offline
browsing. Fonts include `font-display: swap` so text remains visible while custom
fonts download.

## Contributing
See [`CONTRIBUTING.md`](CONTRIBUTING.md) for contribution guidelines. By
participating in this project you agree to abide by the
[Code of Conduct](CODE_OF_CONDUCT.md).
