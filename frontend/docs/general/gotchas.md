# Gotchas

These are some things to be aware of when using this boilerplate.

1. [Special images in HTML files](#special-images-in-html-files)
2. [Exclude modules from Babel processing](#exclude-modules-from-babel-processing)
3. [Running tests in watch mode](#running-tests-in-watch-mode)
4. [When in doubt, re-install!](#when-in-doubt-re-install)
5. [Cleaning up Jest cache](#cleaning-up-jest-cache)

## Special images in HTML files

If you specify your images in the `.html` files using the `<img>` tag, everything
will work fine. The problem comes up if you try to include images using anything
except that tag, like meta tags:

```HTML
<meta property="og:image" content="img/yourimg.png" />
```

The webpack `html-loader` does not recognise this as an image file and will not
transfer the image to the build folder. To get webpack to transfer them, you
have to import them with the file loader in your JavaScript somewhere, e.g.:

```JavaScript
import 'file?name=[name].[ext]!../img/yourimg.png';
```

Then webpack will correctly transfer the image to the build folder.

## Exclude modules from Babel processing

You need to exclude packages which are not intended to be processed by babel. For e.g. Server packages such as 'express' or a CSS file. Just add the package name to `exclude` array in `internals/config.js` and you're all set!

``` js
// in internals/config.js

exclude: [
  'chalk',
  'compression',
  'cross-env',
  'express',
  'ip',
  'minimist',
  'sanitize.css',
  'your-unwanted-package', <- add your-unwanted-package
  ...
]
```

## Running tests in `watch` mode

If you are unable to run tests in watch mode, you may have to install `watchman` for this to work. If you're using a Mac, simply run `brew install watchman`

You can also install `watchman` from source. Please visit their [official guide](https://facebook.github.io/watchman/docs/install.html) for more information.

## When in doubt, re-install!

If you're facing any inexplicable problems while installing dependencies, building your project or running tests, try reinstalling dependencies. It works for most cases. Run the following commands in the exact order given:

Remove node_modules
- `rm -rf node_modules`

Using yarn (recommended)
- `yarn install`

Using npm
- `npm cache clean`
- `npm install`

Build project
- `npm run build`

## Cleaning up Jest cache

By default, Jest caches transformed modules, which may lead to faulty coverage reports. To prevent this, you'll have to clear the cache by running `npm run test -- --no-cache` as pointed out in [Jest docs](https://facebook.github.io/jest/docs/cli.html#cache)
