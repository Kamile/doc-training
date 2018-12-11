# Documentation

## Table of Contents

- [General](general)
  - [**CLI Commands**](general/commands.md)
  - [Server Configurations](general/server-configs.md)
  - [Debugging](general/debugging.md)
  - [FAQ](general/faq.md)
  - [Gotchas](general/gotchas.md)
  - [Remove](general/remove.md)
- [JS](js)
  - [i18n](js/i18n.md)
  - [modules](js/modules.md)

## Overview

### Development

Run `yarn start` to see your app at `localhost:3000`.

### Building & Deploying

Run `yarn build`, which will compile all the necessary files to the
`build` folder.

### Structure

The [`app/`](../../../tree/master/app) directory contains your entire application code, including CSS,
JavaScript, HTML and tests.

The [`internals/`](../../../tree/master/app) directory contains configuration (Webpack & Jest) and a [code generator](./generator.md).

### CSS 

This project uses styled-components.

### Testing

This project uses Jest and Enzyme.

End-to-end testing (using puppeteer) is also configured: you can run your E2E test with `yarn test:e2e`.

Check out the [good tests repo](https://github.com/Theodo-UK/theodo-good-tests) for examples on how to test your code!

