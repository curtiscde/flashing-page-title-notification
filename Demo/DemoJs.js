$(function () {

    $(".btn-on").click(function () {

        PageTitleNotification.On("test", 1000);

    });


    $(".btn-off").click(function () {

        PageTitleNotification.Off();

    });

});