var btnOn = document.getElementById('btn-on');
var btnOff = document.getElementById('btn-off');

btnOn.addEventListener('click', function(){
    pageTitleNotification.on("test", 1000);
});

btnOff.addEventListener('click', function(){
    pageTitleNotification.off();
});