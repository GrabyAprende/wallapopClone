
import { buildUnauthorizedSession, buildAuthenticatedSession } from "./sessionView.js"

export const sessionController = (nav) => {

    if (isUserLoggedIn()) {
        nav.innerHTML = buildAuthenticatedSession();
        const logouButton = nav.querySelector('button');
        logouButton.addEventListener('click', () => {
            localStorage.removeItem('token');
            sessionController(nav);//recargar la pagina
        });
    } else {
        nav.innerHTML = buildUnauthorizedSession();
    }
}
const isUserLoggedIn = () => {
    return localStorage.getItem('token');
}