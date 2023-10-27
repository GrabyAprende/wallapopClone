
import { createNotification } from './notificationsView.js'

export const notificationsController = (notifications) => {

    const showNotification = (message, type) => {
        notifications.innerHTML = createNotification(message, type);//se muestra la notificacion
        setTimeout(() => { //funcion de 3 segundos
            notifications.innerHTML = ''; //desaparece la notificacion
        }, 3000);
    }

    return showNotification; //pedir que victor me explique
}