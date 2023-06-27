
'use strict';


  /*
  window.onload = () => navigator.serviceWorker.getRegistrations().then(function(registrations) {
    window.WebWorkers = registrations;

    const registration = navigator.serviceWorker.register(
            "service-worker.js", 
            {
              scope: "/"
            }
    );

    console.log(registration);
    console.log("window.akPush.initSubscription({ email: 'john_doe@somemail.eu'});");

    // Объект AKPush
    window.akPush = new AKPush();

    console.log(akPush);
  
  });
  */


/*
    initSubscription(); - Создать подписку
    updateSubscription(); - Обновить подписку
*/



/* Регистрация первого воркера при загрузке окна */

/*
window.onload = () => navigator.serviceWorker.getRegistrations().then(function(registrations) {
    window.WebWorkers = registrations;
  
    const registration = navigator.serviceWorker.register(
            "cache-service-worker.js", 
            {
              scope: "/" 
            }
    );
  
    console.log(registration);
    
  });
  

  document.getElementById('init_sub').addEventListener('click', function() {
    try {
  
      // Объект AKPush
      var akPush = new AKPush(
      {
        debug: true,
        swPath: './assets/service-worker.js'
      });
  
      console.log(akPush);
  
      console.log("Текст до вызова подписки");
  
      
        initSubscription(); - Создать подписку
        updateSubscription(); - Обновить подписку
      
      akPush.updateSubscription({ email: 'john_doe@somemail.eu'}); // ..показать форму подписки
      console.log("Текст после вызова подписки");
    }
  
    catch (e) {
      alert(e);
    }
  
  });
  */
  /*
  document.getElementById('run_campaign').addEventListener('click', function() { 
  
    const rawResponse = fetch('https://igor-egorov.dev.altkraft.com/api/v1.1/campaigns/triggers/start/', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://igor-egorov.dev.altkraft.com/'
      },
      body: JSON.stringify({"token": "85253a8c9f1c45afbbec26ae8b335d42", "format": "json", "id": 147, "matching": "profile_id", "profile_id": "646738c3d7b36378e5cf0c77"})
    });
      rawResponse
                  .then((res) => res)
                  .then(console.log);
  
      console.log(content);
  });
  */