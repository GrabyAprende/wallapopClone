import { loginController } from "./loginController.js"

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login');
    loginController(loginForm);
})