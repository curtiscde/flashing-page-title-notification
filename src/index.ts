interface Config {
  currentTitle: string | null;
  interval: number | null;
}

const initPageTitleNotification = () => {
  const config: Config = {
    currentTitle: null,
    interval: null
  };

  const on = function (notificationText: string, intervalSpeed: number) {
      if (!config.interval) {
          config.currentTitle = document.title;
          config.interval = window.setInterval(function() {
              document.title = (config.currentTitle === document.title)
                  ? notificationText
                  : config.currentTitle!;
          }, (intervalSpeed) ? intervalSpeed : 1000);
      }
  };

  const off = function () {
    if (config.interval) {
      window.clearInterval(config.interval!);
      config.interval = null;
      document.title = config.currentTitle!;
    }
  };

  return {
      on: on,
      off: off
  };
};

const init = () => {
  // @ts-ignore
  window['pageTitleNotification'] = initPageTitleNotification();
}

init();
