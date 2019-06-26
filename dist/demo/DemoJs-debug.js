$(function () {

    $(".btn-on").click(function () {

        pageTitleNotification.on("test", 1000);

    });


    $(".btn-off").click(function () {

        pageTitleNotification.off();

    });

});