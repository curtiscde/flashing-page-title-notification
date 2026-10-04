# Import-only: no `window` global or script-tag build

Up to 2.x the package assigned `window.pageTitleNotification` when loaded via a `<script>` tag, and could not be imported at all. From 3.0.0 it is an ES module only: callers `import { pageTitleNotification }` (or `createPageTitleNotification` for a fresh instance), and loading it has no side effects. Script-tag-into-`<head>` usage is now rare, a global gave tests and bundlers nothing to hold, and keeping both paths would mean two builds for a 40-line module.

## Considered Options

- **Keep a script-tag (IIFE) build alongside ESM**: rejected — callers without a bundler can use `<script type="module">` with an ESM CDN such as esm.sh, and 2.x stays available for anyone pinned to the global.
- **ESM + CJS**: rejected — consumers are browser bundlers, which all take ESM; Node 22+ can `require()` ESM.
