"use strict";
var initPageTitleNotification = function () {
    var config = {
        currentTitle: null,
        interval: null,
    };
    var on = function (notificationText, intervalSpeed) {
        if (!config.interval) {
            config.currentTitle = document.title;
            config.interval = window.setInterval(function () {
                document.title = (config.currentTitle === document.title)
                    ? notificationText
                    : config.currentTitle;
            }, (intervalSpeed) || 1000);
        }
    };
    var off = function () {
        if (config.interval) {
            window.clearInterval(config.interval);
            config.interval = null;
            document.title = config.currentTitle;
        }
    };
    return {
        on: on,
        off: off,
    };
};
var init = function () {
    window.pageTitleNotification = initPageTitleNotification();
};
init();
