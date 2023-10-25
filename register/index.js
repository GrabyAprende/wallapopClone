
import { registerController } from "./registerController.js"
import { notificationsController } from "../notifications/notificationsController.js"

const registerForm = document.querySelector('#registerBox'); //va al nodo para ejecutar el formulario
const notificationsSignup = document.querySelector('#notifications');

const showNotification = notificationsController(notificationsSignup);
registerController(registerForm);

registerForm.addEventListener('userCreated', (event) => {
    showNotification(event.detail.message, event.detail.type)
});