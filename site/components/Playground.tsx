'use client';

import { createPageTitleNotification } from 'flashing-page-title';
import { Play, Square } from 'lucide-react';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

const subscribeToTitle = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.head, { subtree: true, childList: true, characterData: true });
  return () => observer.disconnect();
};

const useDocumentTitle = () => useSyncExternalStore(subscribeToTitle, () => document.title, () => '');

export function Playground() {
  const notification = useRef<ReturnType<typeof createPageTitleNotification>>(null);
  const [text, setText] = useState('New Message!');
  const [interval, setIntervalSpeed] = useState(1000);
  const [flashing, setFlashing] = useState(false);
  const title = useDocumentTitle();

  useEffect(() => {
    notification.current = createPageTitleNotification();
    return () => notification.current?.off();
  }, []);

  // on() ignores calls while already flashing, so restart to pick up new settings
  useEffect(() => {
    if (!flashing) return;
    notification.current?.on(text, interval);
    return () => notification.current?.off();
  }, [flashing, text, interval]);

  const snippet = flashing
    ? `pageTitleNotification.on('${text}', ${interval});`
    : 'pageTitleNotification.off();';

  return (
    <div className="card border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-6">
        <BrowserTab title={title} flashing={flashing} />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="floating-label">
            <span>Notification</span>
            <input
              className="input w-full"
              value={text}
              maxLength={40}
              onChange={(e) => setText(e.target.value)}
              placeholder="Notification"
            />
          </label>
          <label className="w-full">
            <span className="mb-1 flex justify-between text-sm">
              <span>Interval</span>
              <span className="font-mono text-base-content/70">
                {interval}
                ms
              </span>
            </span>
            <input
              type="range"
              className="range range-primary range-sm w-full"
              min={250}
              max={3000}
              step={250}
              value={interval}
              onChange={(e) => setIntervalSpeed(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {flashing
            ? (
                <button type="button" className="btn btn-neutral" onClick={() => setFlashing(false)}>
                  <Square className="size-4" />
                  Stop
                </button>
              )
            : (
                <button type="button" className="btn btn-primary" onClick={() => setFlashing(true)} disabled={!text}>
                  <Play className="size-4" />
                  Start flashing
                </button>
              )}
          <code className="text-sm text-base-content/70 break-all">{snippet}</code>
        </div>

        <p className="text-sm text-base-content/70" aria-live="polite">
          {flashing
            ? 'Now switch to another tab and look at this one.'
            : 'Start it, then switch tabs: the real page title flashes too.'}
        </p>
      </div>
    </div>
  );
}

function BrowserTab({ title, flashing }: { title: string; flashing: boolean }) {
  return (
    <div className="overflow-hidden rounded-box border border-base-300 bg-base-200" aria-hidden="true">
      <div className="flex items-end gap-2 px-3 pt-3">
        <div className="mb-3 flex gap-1.5">
          <span className="size-3 rounded-full bg-error/70" />
          <span className="size-3 rounded-full bg-warning/70" />
          <span className="size-3 rounded-full bg-success/70" />
        </div>
        <div className="flex min-w-0 max-w-xs flex-1 items-center gap-2 rounded-t-lg bg-base-100 px-3 py-2 text-sm">
          <span className={`size-2 shrink-0 rounded-full ${flashing ? 'bg-primary animate-pulse' : 'bg-base-content/30'}`} />
          <span className="truncate font-medium">{title || ' '}</span>
        </div>
        <div className="hidden min-w-0 max-w-[10rem] flex-1 items-center rounded-t-lg px-3 py-2 text-sm text-base-content/50 sm:flex">
          <span className="truncate">Another tab</span>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-base-100 px-3 py-2">
        <div className="h-7 flex-1 rounded-full bg-base-200 px-3 text-xs leading-7 text-base-content/50">
          flashing-page-title.curtiscode.dev
        </div>
      </div>
    </div>
  );
}
