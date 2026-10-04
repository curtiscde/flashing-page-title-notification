'use client';

import { Moon, Sun } from 'lucide-react';

// The initial theme is set before paint by the inline script in layout.tsx;
// CSS swaps the icons, so this component needs no state.
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // storage unavailable: the choice just won't persist
    }
  };

  return (
    <button type="button" className="btn btn-ghost btn-square" onClick={toggle} aria-label="Toggle dark mode">
      <Sun className="hidden size-5 [[data-theme=dark]_&]:block" />
      <Moon className="size-5 [[data-theme=dark]_&]:hidden" />
    </button>
  );
}

export const themeInitScript = `(() => {
  let theme;
  try { theme = localStorage.getItem('theme'); } catch {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();`;
