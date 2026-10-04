import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { themeInitScript } from '@/components/ThemeToggle';
import './globals.css';

const description = 'Flash the browser tab\'s page title to draw the user\'s attention back, e.g. for new messages. Tiny, dependency-free, TypeScript.';

export const metadata: Metadata = {
  metadataBase: new URL('https://flashing-page-title.curtiscode.dev'),
  title: 'flashing-page-title',
  description,
  openGraph: { title: 'flashing-page-title', description, type: 'website' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-base-100 text-base-content antialiased">{children}</body>
    </html>
  );
}
