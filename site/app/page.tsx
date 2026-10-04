import { BookOpen, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';
import { GitHubIcon, NpmIcon } from '@/components/BrandIcons';
import { CodeBlock, CodeTabs } from '@/components/CodeBlock';
import { CopyButton } from '@/components/CopyButton';
import { Playground } from '@/components/Playground';
import { ThemeToggle } from '@/components/ThemeToggle';
import { installCommand, migrationSnippet, usageSnippets } from '@/lib/snippets';

const links = {
  github: 'https://github.com/curtiscde/flashing-page-title',
  npm: 'https://www.npmjs.com/package/flashing-page-title',
  blog: 'https://www.curtiscode.dev/post/create-a-flashing-tab-notification-page-title',
  author: 'https://www.curtiscode.dev',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 sm:px-6">
        <Hero />
        <Section id="demo" title="Try it">
          <Playground />
        </Section>
        <Section id="usage" title="Usage">
          <CodeTabs name="usage" snippets={usageSnippets} />
        </Section>
        <Section id="api" title="API">
          <Api />
        </Section>
        <Section id="migrating" title="Migrating from 2.x">
          <p className="mb-4 text-base-content/80">
            3.0 is an ES module only and no longer sets
            {' '}
            <code>window.pageTitleNotification</code>
            .
            The package was renamed from
            {' '}
            <code>flashing-page-title-notification</code>
            {' '}
            in 3.1, and its exports in 3.2 (
            <code>pageTitleNotification</code>
            {' → '}
            <code>flashingPageTitle</code>
            ,
            {' '}
            <code>createPageTitleNotification</code>
            {' → '}
            <code>createFlashingPageTitle</code>
            ). The old names still work until 4.0.
            Internet Explorer is no longer supported.
          </p>
          <CodeBlock snippet={migrationSnippet} />
        </Section>
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-base-300 bg-base-100/80 backdrop-blur">
      <nav className="navbar mx-auto max-w-4xl px-4 sm:px-6">
        <a href="#" className="flex-1 font-mono font-semibold">flashing-page-title</a>
        <div className="flex items-center gap-1">
          <a href="#usage" className="btn btn-ghost btn-sm hidden sm:inline-flex">Usage</a>
          <a href="#api" className="btn btn-ghost btn-sm hidden sm:inline-flex">API</a>
          <a href={links.github} className="btn btn-ghost btn-square" aria-label="GitHub repository">
            <GitHubIcon className="size-5" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-16 text-center sm:py-24">
      <div className="mb-6 flex justify-center gap-2">
        <img src="https://img.shields.io/npm/v/flashing-page-title" alt="npm version" height={20} />
        <img src="https://img.shields.io/bundlejs/size/flashing-page-title" alt="minzipped size" height={20} />
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Flashing
        {' '}
        <span className="text-primary">page title</span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-base-content/70">
        Flash the browser tab&apos;s title to draw users back to your page when something happens:
        new messages, finished uploads, incoming calls. Tiny, dependency-free and typed.
      </p>

      <div className="mx-auto mt-8 flex max-w-sm items-center justify-between gap-2 rounded-box border border-base-300 bg-base-200 py-1 pr-1 pl-4 font-mono text-sm">
        <span>
          <span className="text-base-content/50 select-none">$ </span>
          {installCommand}
        </span>
        <CopyButton text={installCommand} />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#demo" className="btn btn-primary">Try it</a>
        <a href={links.github} className="btn btn-outline">
          <GitHubIcon className="size-4" />
          GitHub
        </a>
        <a href={links.npm} className="btn btn-outline">
          <NpmIcon className="size-5" />
          npm
        </a>
        <a href={links.blog} className="btn btn-outline">
          <BookOpen className="size-4" />
          Read the blog post
        </a>
      </div>
    </section>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-10">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

const api = [
  {
    signature: 'on(notificationText: string, intervalSpeed = 1000)',
    description: 'Starts flashing the page title between notificationText and the original title every intervalSpeed milliseconds. Does nothing if already flashing.',
  },
  {
    signature: 'off()',
    description: 'Stops flashing and restores the original title. Does nothing if not flashing.',
  },
  {
    signature: 'createFlashingPageTitle()',
    description: 'Returns a fresh { on, off } instance with its own state, e.g. one per component or test. flashingPageTitle is a shared instance.',
  },
];

function Api() {
  return (
    <div className="grid gap-4">
      {api.map(({ signature, description }) => (
        <div key={signature} className="rounded-box border border-base-300 p-5">
          <code className="font-semibold break-words">{signature}</code>
          <p className="mt-2 text-base-content/70">{description}</p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-base-300 bg-base-200">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <a href={links.author} className="group flex items-center gap-4">
          <div className="mask mask-squircle bg-base-content p-0.5">
            <img src="/avatar.jpg" alt="" width={64} height={64} className="mask mask-squircle size-16" />
          </div>
          <div>
            <div className="text-sm text-base-content/60">Created by</div>
            <div className="text-xl font-bold group-hover:underline">Curtis Lane</div>
            <div className="flex items-center gap-1 text-sm text-base-content/60">
              curtiscode.dev
              <ExternalLink className="size-3" />
            </div>
          </div>
        </a>
        <div className="flex flex-col gap-2 text-sm text-base-content/70 sm:items-end">
          <div className="flex gap-4">
            <a href={links.github} className="link link-hover">GitHub</a>
            <a href={links.npm} className="link link-hover">npm</a>
            <a href={links.blog} className="link link-hover">Blog post</a>
          </div>
          <a href={`${links.github}/blob/main/LICENSE`} className="link link-hover">MIT licence</a>
        </div>
      </div>
    </footer>
  );
}
