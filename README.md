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

### Without a bundler

```html
<script type="module">
  import { flashingPageTitle } from "https://esm.sh/flashing-page-title@3";

  flashingPageTitle.on("New Message!");
</script>
```

## API

**`flashingPageTitle`**: the ready-to-use flasher. Most apps only need this.

**`flashingPageTitle.on(text, interval?)`**: starts flashing the tab title between `text` and the page's current title, swapping every `interval` milliseconds (default `1000`). If it's already flashing, the call is ignored, so call `off()` first to change the text.

**`flashingPageTitle.off()`**: stops flashing and puts the original title back. Safe to call when nothing is flashing.

**`createFlashingPageTitle()`**: creates a separate flasher with the same `on()` / `off()`. You only need this when independent parts of your app might each flash the title, or to keep tests isolated: each one stops without affecting the others.

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

Releases are automatic. Don't bump `version` by hand.

PRs are squash-merged with their title as the commit message, so **PR titles must be [conventional commits](https://www.conventionalcommits.org/)** (a check enforces this). On every merge to `main`, the [Publish workflow](.github/workflows/publish.yml) runs [semantic-release](https://semantic-release.gitbook.io/), which picks the next version from the titles merged since the last release:

| PR title | Release |
|---|---|
| `fix: …` | patch |
| `feat: …` | minor |
| `feat!: …` or a `BREAKING CHANGE:` footer | major |
| `chore:`, `docs:`, `ci:`, `test:`, `refactor:`, `build:`, `chore(deps): …` | none |

When there's a release, it publishes to npm (Trusted Publishing, with provenance), commits the new version and `CHANGELOG.md` back to `main`, tags `vX.Y.Z` and creates a GitHub Release. Every dependency is a dev dependency, so Dependabot PRs use `chore(deps):` and never publish.
