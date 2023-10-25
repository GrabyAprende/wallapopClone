
import { createUser } from "./registerModel.js";

export const registerController = (registerForm) => {
    //añadir un escuchador al form para saber cuando se rellena
    registerForm.addEventListener("submit", (event) => validateForm(event, registerForm));
} 
const validateForm = async (event, registerForm) => {
    event.preventDefault();// prevenir que el evento submit se propague y no refresque automaticamente

    const email = registerForm.querySelector('#email');
    const password = registerForm.querySelector('#password');
    const passwordConfirmation = registerForm.querySelector('#passwordRepeat');

    if (isFormValid(email, password, passwordConfirmation)) {
        try {
            await createUser(email.value, password.value)
            dispatchEvent('userCreated', {
                type: "success",
                message: 'Usuario creado correctamente',
                }, registerForm)

        } catch (error) {
            dispatchEvent('userCreated', {
                    type: "error",
                    message: error,
                }, registerForm)
            }
        }
    }


const isFormValid = (email, password, passwordConfirmation) => {
    const emailValidation = isEmailValid(email);
    const passwordValidation = isPasswordValid(password, passwordConfirmation);
    return emailValidation && passwordValidation;
}

const isEmailValid = (email) => {
    const emailRegExp =  new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/); 
    let result = true;
    if (!emailRegExp.test(email.value)) {//test es un metodo que devuelve un bool
        alert('Email incorrecto');
        result = false;
    }
    return result;
}

const isPasswordValid = (password, passwordConfirmation) => {
    const areEquals = password.value === passwordConfirmation.value;
    if (!areEquals) {
        alert('Las contraseñas no son iguales');
    }
    return areEquals;
}

const dispatchEvent = (eventName, data, registerForm) => {
    const event = new CustomEvent(eventName, {
        detail: data
    });
    registerForm.dispatchEvent(event);
}
