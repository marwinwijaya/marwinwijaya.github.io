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

### Node server with cache headers

This project also includes a minimal Express server (`server.js`) configured
to deliver static assets with a long cache lifetime (`Cache-Control: immutable,
max-age=31536000`). Run it with:

```bash
npm install
npm start
```

The site will be available at `http://localhost:8080`. This setup better mirrors
production caching behaviour and improves Lighthouse scores for the "Serve
static assets with an efficient cache policy" audit.

## Development Setup

First install the dependencies:

```bash
npm install
```

Compile the assets and start the development server:

```bash
npm run build
npm start
```

This will generate the compiled CSS and JavaScript in `css/` and `js/` and serve the site locally at `http://localhost:8080`.

## Updating Styles and Scripts

Custom styles are authored in the `scss/` directory using Sass. Run `npm run build` to compile `scss/style.scss` into `css/style.css` and a minified variant.
JavaScript sources live in `js/` and are minified using [Terser](https://github.com/terser/terser) as part of the same build step.
Edit the unminified files (`custom.js`) and re-run the build before committing.

The site depends on [Bootstrap](https://getbootstrap.com/), jQuery, and several
jQuery plugins located in `js/vendor/`.

## Performance

Static assets are cached using a simple Service Worker (`sw.js`) registered on
page load. This enables repeat visits to load faster and allows basic offline
browsing. Fonts include `font-display: swap` so text remains visible while custom
fonts download.

The CSS for unused animation and slider libraries has been removed and core
stylesheets are now preloaded to improve render performance.

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for contribution guidelines. By
participating in this project you agree to abide by the
[Code of Conduct](CODE_OF_CONDUCT.md).
