# Rename exports to `flashingPageTitle`, keeping deprecated aliases until 4.0

From 3.2.0 the exports match the package name: `flashingPageTitle`, `createFlashingPageTitle()` and the `FlashingPageTitle` type. `pageTitleNotification`, `createPageTitleNotification` and `PageTitleNotification` remain as `@deprecated` aliases of the same values, so editors strike them through and point to the new name, and are removed in 4.0. `import { flashingPageTitle } from 'flashing-page-title'` reads as one name, where the old export echoed the package's previous name (ADR 0002).

## Considered Options

- **Hard rename in 4.0.0**: rejected — a second major within a day of 3.0.0 for a cosmetic change; aliases cost three lines.
- **Keep the old export names**: rejected — every import would mix two naming schemes, `flashing-page-title` and `pageTitleNotification`.
