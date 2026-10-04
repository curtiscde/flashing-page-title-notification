# Flashing Page Title Notification JS

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea404321-93fd-4514-bba4-8a4965a7244d/deploy-status)](https://app.netlify.com/sites/flashing-page-title-notification/deploys)

A javascript plugin which allows easy use of creating a flashing page title for notification purposes.

[![enter image description here][1]][1]


  [1]: https://i.stack.imgur.com/e2O3j.gif

## Demo

https://flashing-page-title-notification.netlify.com

## Blog Article

https://www.curtiscode.dev/post/js/create-a-flashing-tab-notification-page-title

## Install

```
npm install flashing-page-title-notification
```

## Example

```ts
import { pageTitleNotification } from "flashing-page-title-notification";

pageTitleNotification.on("New Message!", 1000);

pageTitleNotification.off();
```

`on(notificationText, intervalSpeed?)` flashes the page title between `notificationText` and the original title every `intervalSpeed` milliseconds (default `1000`). Calling `on()` while already flashing does nothing. `off()` stops flashing and restores the original title.

`createPageTitleNotification()` returns a fresh `{ on, off }` instance, e.g. for tests.

### Without a bundler

```html
<script type="module">
  import { pageTitleNotification } from "https://esm.sh/flashing-page-title-notification@3";

  pageTitleNotification.on("New Message!");
</script>
```

## Migrating from 2.x

3.0.0 is an ES module only and no longer sets `window.pageTitleNotification`.

- Replace the global with `import { pageTitleNotification } from "flashing-page-title-notification"`.
- If you load the script from a CDN without a version (e.g. `unpkg.com/flashing-page-title-notification/dist/index.js`), either pin it to `@2` or switch to the `<script type="module">` example above.
- Internet Explorer is no longer supported (the build targets ES2017).

## Develop

```
npm run build       # compile to /dist
npm test            # run tests
npm run build-demo  # build the demo to /demo-publish
```
