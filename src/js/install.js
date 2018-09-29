var deferredPrompt;
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

window.addEventListener('beforeinstallprompt', function(e) {
    // beforeinstallprompt Event fired
  
    // e.userChoice will return a Promise.
    // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
    e.userChoice.then(function(choiceResult) {
  
      console.log(choiceResult.outcome);
  
      if(choiceResult.outcome == 'dismissed') {
        console.log('User cancelled home screen install');
      }
      else {
        console.log('User added to home screen');
      }
    });
  });

