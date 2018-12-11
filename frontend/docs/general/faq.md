# Frequently Asked Questions

## Table of Contents

- [Where are Babel and ESLint configured?](#where-are-babel-and-eslint-configured)
- [Issue with local caching when running in production mode (F5 / ctrl+F5 / cmd+r weird behavior)](#issue-with-local-caching-when-running-in-production-mode-f5--ctrlf5--cmdr-weird-behavior)
  - [Quick fix on your local browser:](#quick-fix-on-your-local-browser)
  - [Full in-depth explanation](#full-in-depth-explanation)
- [Local webfonts not working for development](#local-webfonts-not-working-for-development)

## Where are Babel and ESLint configured?

In package.json

## Issue with local caching when running in production mode (F5 / ctrl+F5 / cmd+r weird behavior)

Your production site isn't working? You update the code and nothing changes? It drives you insane?

#### Quick fix on your local browser:

To fix it on your local browser, just do the following. (Suited when you're testing the production mode locally)

`Chrome dev tools > Application > Clear Storage > Clear site data` *(Chrome)*

#### Full in-depth explanation

Read more at https://github.com/NekR/offline-plugin/blob/master/docs/updates.md

## Local webfonts not working for development

In development mode CSS sourcemaps require that styling is loaded by blob://,
resulting in browsers resolving font files relative to the main document.

A way to use local webfonts in development mode is to add an absolute
output.publicPath in webpack.dev.config.js, with protocol.

```javascript
// webpack.dev.config.js

output: {
  publicPath: 'http://127.0.0.1:3000/',
  /* … */
},
```

