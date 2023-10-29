import { notificationsController } from './notifications/notificationsController.js';
import { advertListController } from './advertsList/advertListController.js';
import { sessionController } from './session/sessionController.js';
import { loaderController } from './loader/loaderController.js';

const notifications = document.getElementById('notifications');


const showNotification = notificationsController(notifications);
const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
    const advertList = document.getElementById('adverts');

    advertList.addEventListener('adsLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type)
    })
    advertList.addEventListener('startLoadingAds', () => {
        show();
    })
    advertList.addEventListener('finishLoadingAds', () => {
        hide();
        showNotification("Anuncios cargados", "success");
    })
    advertList.addEventListener("error",  (event) => {
        showNotification(event.detail.message, event.detail.type)
        hide();
    })

    advertListController(advertList);

    const session = document.getElementById('session');
    sessionController(session);

    const bottonCreate = document.getElementById('adCreatBtn');
bottonCreate.addEventListener('click', () => {
    window.location.href = 'adCreation.html'
})
})

window.addEventListener('offline', () => {
    showNotification('Se ha perdido la conexión', 'error');
})
