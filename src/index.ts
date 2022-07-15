interface Config {
  currentTitle: string | null;
  interval: number | null;
}

const initPageTitleNotification = () => {
  const config: Config = {
    currentTitle: null,
    interval: null,
  };

  const on = (notificationText: string, intervalSpeed: number) => {
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

const init = () => {
  // @ts-ignore
  window.pageTitleNotification = initPageTitleNotification();
};

init();
