function randomNotification() {
    var notifTitle = 'Bem vindo!';
    var notifImg = 'data/img/' + games[randomItem].slug + '.jpg';
    var options = {
        body: 'Obrigado por assinar o feed',
        icon: notifImg
    }
    var notif = new Notification(notifTitle, options);
    
};


var button = document.getElementById("notifications");
button.addEventListener('click', function (e) {
    Notification.requestPermission().then(function (result) {
        if (result === 'granted') {
            randomNotification();
        }
    });
});
