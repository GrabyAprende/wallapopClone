import { notificationsController } from "../notifications/notificationsController.js"
import { advertDetailController } from "./advertDetailController.js"


document.addEventListener('DOMContentLoaded', ()  => {
    const params = new URLSearchParams(window.location.search);
    const advertisementId = params.get("id");

    const notifications = document.querySelector('#notifications');
    const showNotification = notificationsController(notifications);

    const advertDetail = document.getElementById('detailContainer');

    advertDetail.addEventListener('advertCreated', (event) => {
        showNotification(event.detail.message, event.detail.type);
    });

    advertDetailController(advertDetail, advertisementId)
})