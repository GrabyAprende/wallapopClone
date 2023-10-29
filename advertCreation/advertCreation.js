import { advertCreationController } from './advertCreationController.js';
import { notificationsController } from "../notifications/notificationsController.js";
import { loaderController } from '../loader/loaderController.js';
const loader = document.getElementById('loader');
const { show, hide } = loaderController(loader);

const token = localStorage.getItem('token');
if (!token) {
    window.location = './register.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const advertCreation = document.querySelector('#advertCreation');

    const notifications = document.querySelector('#notifications');
    const showNotification = notificationsController(notifications);

    advertCreation.addEventListener('advertCreated', (event) => {
    showNotification(event.detail.message, event.detail.type);
    hide()
    });

    advertCreation.addEventListener('startLoadingAds', () => {
        show();
    })
    advertCreation.addEventListener('finishLoadingAds', () => {
        hide();
        showNotification("Anuncios cargados", "success");
    })
    advertCreation.addEventListener("error",  (event) => {
        showNotification(event.detail.message, event.detail.type)
        hide();
    })

    advertCreationController(advertCreation);

})