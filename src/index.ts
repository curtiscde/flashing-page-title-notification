export interface PageTitleNotification {
  on: (notificationText: string, intervalSpeed?: number) => void;
  off: () => void;
}

interface Config {
  currentTitle: string | null;
  interval: number | null;
}

export const createPageTitleNotification = (): PageTitleNotification => {
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
      }, (intervalSpeed) || 1000);
    }
  };

  const off = () => {
    if (config.interval) {
      window.clearInterval(config.interval!);
      config.interval = null;
      document.title = config.currentTitle!;
    }
  };

  return {
    on,
    off,
  };
};

export const pageTitleNotification = createPageTitleNotification();
