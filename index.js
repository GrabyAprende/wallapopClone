import { notificationsController } from "./notifications/notificationsController.js";
//import { tweetListController } from "./tweetList/tweetListController.js";
import { sessionController } from "./session/sessionContoller.js";


const notifications = document.getElementById('notifications');

const showNotification = notificationsController(notifications);


//document.addEventListener('DOMContentLoaded', () => {  ANUNCIOS
    //const tweetList = document.getElementById('tweets')
    //tweetListController(tweetList);
    
    //tweetList.addEventListener('tweetsLoaded', (event) => {
        //showNotification(event.detail.message, event.detail.type);
    //});
    
    const session = document.getElementById('session');
    sessionController(session);
//})

window.addEventListener('offline', () => { //avisa si el usuario se quedo sin conexion
    showNotification('se perdió la conexión, error');

})
