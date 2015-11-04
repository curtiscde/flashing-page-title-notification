var pageTitleNotification = (function (window, document) {

    this.config = {
        currentTitle: null,
        interval: null
    };

    this.on = function (notificationText, intervalSpeed) {
        config.currentTitle = document.title;
        config.interval = window.setInterval(function () {
            document.title = (config.currentTitle == document.title)
                                ? notificationText
                                : config.currentTitle;
        }, (intervalSpeed) ? intervalSpeed : 1000);
    };

    this.off = function () {
        window.clearInterval(config.interval);
        document.title = config.currentTitle;
    };

    return {
        on: on,
        off: off
    };

})(window, document);