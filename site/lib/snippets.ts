import type { BundledLanguage } from 'shiki';

export interface Snippet {
  label: string;
  lang: BundledLanguage;
  code: string;
}

export const installCommand = 'npm install flashing-page-title';

export const usageSnippets: Snippet[] = [
  {
    label: 'Bundler',
    lang: 'ts',
    code: `import { pageTitleNotification } from 'flashing-page-title';

// Flash "New Message!" every second
pageTitleNotification.on('New Message!', 1000);

// Stop flashing and restore the original title
pageTitleNotification.off();`,
  },
  {
    label: 'Script tag',
    lang: 'html',
    code: `<script type="module">
  import { pageTitleNotification } from 'https://esm.sh/flashing-page-title@3';

  pageTitleNotification.on('New Message!');
</script>`,
  },
  {
    label: 'React',
    lang: 'tsx',
    code: `import { useEffect } from 'react';
import { createPageTitleNotification } from 'flashing-page-title';

export function useFlashingTitle(text: string | null, interval = 1000) {
  useEffect(() => {
    if (!text) return;

    const notification = createPageTitleNotification();
    notification.on(text, interval);

    return () => notification.off();
  }, [text, interval]);
}

// useFlashingTitle(unread > 0 ? \`(\${unread}) New messages\` : null);`,
  },
  {
    label: 'Stop on return',
    lang: 'ts',
    code: `import { pageTitleNotification } from 'flashing-page-title';

// Only flash while the user is looking at another tab
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    pageTitleNotification.off();
  }
});

socket.on('message', () => {
  if (document.visibilityState === 'hidden') {
    pageTitleNotification.on('New Message!');
  }
});`,
  },
];

export const migrationSnippet: Snippet = {
  label: 'Migrating from 2.x',
  lang: 'ts',
  code: `// 2.x: a global set by a <script> tag
window.pageTitleNotification.on('New Message!');

// 3.x: import it
import { pageTitleNotification } from 'flashing-page-title';
pageTitleNotification.on('New Message!');`,
};
