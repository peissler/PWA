function randomNotification() {
    var notifTitle = 'Bem vindo!';
    var notifImg = '/src/image/metal.png';
    var options = {
        body: 'Obrigado por assinar o feed',
        icon: notifImg
    };
    var notif = new Notification(notifTitle, options);
    
}


var button = document.getElementById('notifications');
button.addEventListener('click', function (e) {
    Notification.requestPermission().then(function (result) {
        if (result === 'granted') {
            randomNotification();
        }
    });
});


var installButton = document.getElementById('install');

installButton.addEventListener('click', function(e) {
    console.log('show');
    if(deferredPrompt !== undefined) {
      // The user has had a postive interaction with our app and Chrome
      // has tried to prompt previously, so let's show the prompt.
      deferredPrompt.prompt();
  
      // Follow what the user has done with the prompt.
      deferredPrompt.userChoice.then(function(choiceResult) {
  
        console.log(choiceResult.outcome);
  
        if(choiceResult.outcome == 'dismissed') {
          console.log('User cancelled home screen install');
        }
        else {
          console.log('User added to home screen');
        }
  
        // We no longer need the prompt.  Clear it up.
        deferredPrompt = null;
      });
    }
  });