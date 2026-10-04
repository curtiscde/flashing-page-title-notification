# Rename the package to `flashing-page-title`

From 3.1.0 the package is published as `flashing-page-title`; `flashing-page-title-notification` is deprecated on npm with a pointer to the new name, and the GitHub repo and demo site follow (`curtiscde/flashing-page-title`, `flashing-page-title.curtiscode.dev`). The flashing title _is_ the notification, so the suffix added length without meaning, and 3.0.0 had just broken every import anyway with ~100 downloads a month, making this the cheapest moment to change it.

Version numbers continue rather than restarting at 1.0.0: the code and API are unchanged, so the "Migrating from 2.x" notes and `@3` CDN pins stay true.

## Considered Options

- **Keep the old name**: rejected — the long name is what people type in every import, and the new subdomain would no longer match the package.
- **Publish a final old-name release that re-exports the new package**: rejected — a second package to maintain forever; `npm deprecate` already tells new installers where to go, and existing installs keep working.
