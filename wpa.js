
'use strict';

document.getElementById('init_sub').addEventListener('click', function() { // По клику на кнопку..
    try {

        // Объект AKPush
        var akPush = new AKPush();

        console.log({akPush});
        console.log("Текст до вызова родписки");
        akPush.initSubscription({ email: 'john_doe@somemail.eu' }); // ..показать форму подписки
        console.log("Текст после вызова подписки");
    }

    catch (e) {
        alert(JSON.stringify(e)); // Или записать ошибку в alert (консоль) браузера
    }
});

console.log(AKPush);
