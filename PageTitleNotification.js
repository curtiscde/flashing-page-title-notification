var PageTitleNotification = {
    Vars: {
        OriginalTitle: document.title,
        Interval: null
    },
    On: function (notification, intervalSpeed) {
        var _this = this;
        _this.Vars.Interval = setInterval(function () {
            document.title = (_this.Vars.OriginalTitle == document.title)
                                ? notification
                                : _this.Vars.OriginalTitle;
        }, (intervalSpeed) ? intervalSpeed : 1000);
    },
    Off: function () {
        clearInterval(this.Vars.Interval);
        document.title = this.Vars.OriginalTitle;
    }
};