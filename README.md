# flashing-page-title

[![npm](https://img.shields.io/npm/v/flashing-page-title)](https://www.npmjs.com/package/flashing-page-title)
[![CI](https://github.com/curtiscde/flashing-page-title/actions/workflows/ci.yml/badge.svg)](https://github.com/curtiscde/flashing-page-title/actions/workflows/ci.yml)
[![minzipped size](https://img.shields.io/bundlejs/size/flashing-page-title)](https://bundlejs.com/?q=flashing-page-title)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ea404321-93fd-4514-bba4-8a4965a7244d/deploy-status)](https://app.netlify.com/projects/flashing-page-title/deploys)

Flash the browser tab's page title to draw the user's attention back, e.g. for new messages.

> Previously published as `flashing-page-title-notification`. Same code, new name: swap the package name in your `package.json` and imports.

- **Demo:** https://flashing-page-title.curtiscode.dev
- **Blog article:** https://www.curtiscode.dev/post/create-a-flashing-tab-notification-page-title

## Install

```
npm install flashing-page-title
```

## Example

```ts
import { flashingPageTitle } from "flashing-page-title";

flashingPageTitle.on("New Message!", 1000);

flashingPageTitle.off();
```

`on(notificationText, intervalSpeed?)` flashes the page title between `notificationText` and the original title every `intervalSpeed` milliseconds (default `1000`). Calling `on()` while already flashing does nothing. `off()` stops flashing and restores the original title.

`createFlashingPageTitle()` returns a fresh `{ on, off }` instance, e.g. for tests.

### Without a bundler

```html
<script type="module">
  import { flashingPageTitle } from "https://esm.sh/flashing-page-title@3";

  flashingPageTitle.on("New Message!");
</script>
```

## Renamed exports (3.2)

3.2.0 renamed the exports to match the package name. The old names still work but are deprecated and will be removed in 4.0:

| Before 3.2 | 3.2+ |
|---|---|
| `pageTitleNotification` | `flashingPageTitle` |
| `createPageTitleNotification()` | `createFlashingPageTitle()` |
| `PageTitleNotification` (type) | `FlashingPageTitle` |

## Migrating from 2.x

3.0.0 is an ES module only and no longer sets `window.pageTitleNotification`.

- Replace the global with `import { flashingPageTitle } from "flashing-page-title"`.
- If you load the script from a CDN without a version (e.g. `unpkg.com/flashing-page-title-notification/dist/index.js`), either pin it to `@2` or switch to the `<script type="module">` example above.
- Internet Explorer is no longer supported (the build targets ES2017).

## Develop

```
npm run build          # compile to /dist
npm test               # run tests
npm run check-package  # lint the packed package with publint and attw
npm run dev:site       # run the demo site (Next.js, in /site) locally
npm run build:site     # static export of the demo site to /site/out
```

## Releasing

Bump `version` in `package.json` in a PR. When it merges to `main`, the [Publish workflow](.github/workflows/publish.yml) publishes that version to npm (with provenance, via Trusted Publishing), tags `vX.Y.Z` and creates a GitHub Release. Merges that don't change the version publish nothing.
