import { codeToHtml, type BundledLanguage } from 'shiki';

// Runs at build time only (static export), so no highlighter ships to the browser.
export const highlight = (code: string, lang: BundledLanguage) => codeToHtml(code, {
  lang,
  themes: { light: 'github-light', dark: 'github-dark' },
  defaultColor: false,
});
