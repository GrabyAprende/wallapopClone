
import { registerController } from "./registerController.js"
import { notificationsController } from "../notifications/notificationsController.js"

const registerForm = document.querySelector('#registerBox'); //va al nodo para ejecutar el formulario
const notificationsRegister = document.querySelector('#notifications');

const showNotification = notificationsController(notificationsRegister);
registerController(registerForm);

registerForm.addEventListener('userCreated', (event) => {
    showNotification(event.detail.message, event.detail.type)
})