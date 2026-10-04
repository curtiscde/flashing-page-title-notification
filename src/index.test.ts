import {
  afterEach, beforeEach, describe, expect, it, vi,
} from 'vitest';
import * as lib from './index';
import { createFlashingPageTitle } from './index';

describe('flashingPageTitle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    document.title = 'Original';
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('alternates between the notification and the original title', () => {
    const notification = createFlashingPageTitle();
    notification.on('New!', 500);

    expect(document.title).toBe('Original');
    vi.advanceTimersByTime(500);
    expect(document.title).toBe('New!');
    vi.advanceTimersByTime(500);
    expect(document.title).toBe('Original');
    vi.advanceTimersByTime(500);
    expect(document.title).toBe('New!');

    notification.off();
  });

  it.each([undefined, 0])('defaults to a 1000ms interval when speed is %s', (speed?: number) => {
    const notification = createFlashingPageTitle();
    notification.on('New!', speed);

    vi.advanceTimersByTime(999);
    expect(document.title).toBe('Original');
    vi.advanceTimersByTime(1);
    expect(document.title).toBe('New!');

    notification.off();
  });

  it('off() stops flashing and restores the original title', () => {
    const notification = createFlashingPageTitle();
    notification.on('New!', 500);
    vi.advanceTimersByTime(500);

    notification.off();

    expect(document.title).toBe('Original');
    vi.advanceTimersByTime(5000);
    expect(document.title).toBe('Original');
  });

  it('off() does nothing when not flashing', () => {
    const notification = createFlashingPageTitle();
    document.title = 'Changed by the page';

    notification.off();

    expect(document.title).toBe('Changed by the page');
  });

  it('ignores on() while already flashing', () => {
    const notification = createFlashingPageTitle();
    notification.on('First', 500);
    notification.on('Second', 100);

    vi.advanceTimersByTime(100);
    expect(document.title).toBe('Original');
    vi.advanceTimersByTime(400);
    expect(document.title).toBe('First');

    notification.off();
  });
});

describe('importing the module', () => {
  beforeEach(() => {
    vi.resetModules();
    document.title = 'Original';
  });

  it('does not assign a window global', async () => {
    await import('./index');

    expect('flashingPageTitle' in window).toBe(false);
    expect('pageTitleNotification' in window).toBe(false);
  });

  it('does not change the page title', async () => {
    vi.useFakeTimers();
    await import('./index');

    vi.advanceTimersByTime(5000);
    expect(document.title).toBe('Original');
    vi.useRealTimers();
  });
});

describe('deprecated 3.1 names', () => {
  it('still export the same implementations', () => {
    expect(lib.pageTitleNotification).toBe(lib.flashingPageTitle);
    expect(lib.createPageTitleNotification).toBe(lib.createFlashingPageTitle);
  });
});
