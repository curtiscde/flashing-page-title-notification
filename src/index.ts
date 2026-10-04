export interface FlashingPageTitle {
  on: (notificationText: string, intervalSpeed?: number) => void;
  off: () => void;
}

interface Config {
  currentTitle: string | null;
  interval: number | null;
}

export const createFlashingPageTitle = (): FlashingPageTitle => {
  const config: Config = {
    currentTitle: null,
    interval: null,
  };

  const on = (notificationText: string, intervalSpeed?: number) => {
    if (!config.interval) {
      config.currentTitle = document.title;
      config.interval = window.setInterval(() => {
        document.title = (config.currentTitle === document.title)
          ? notificationText
          : config.currentTitle!;
      // `||` rather than `??` so that 0 also falls back to the default
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      }, intervalSpeed || 1000);
    }
  };

  const off = () => {
    if (config.interval) {
      window.clearInterval(config.interval);
      config.interval = null;
      document.title = config.currentTitle!;
    }
  };

  return {
    on,
    off,
  };
};

export const flashingPageTitle = createFlashingPageTitle();

/** @deprecated Renamed to `FlashingPageTitle`; this alias will be removed in 4.0. */
export type PageTitleNotification = FlashingPageTitle;

/** @deprecated Renamed to `createFlashingPageTitle`; this alias will be removed in 4.0. */
export const createPageTitleNotification = createFlashingPageTitle;

/** @deprecated Renamed to `flashingPageTitle`; this alias will be removed in 4.0. */
export const pageTitleNotification = flashingPageTitle;
