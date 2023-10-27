
export const buildUnauthorizedSession = () => { //cuando no inicie sesion
    return `
<ul>
    <li>
        <a href="./login.html">Login</a>
        <a href="./signup.html">Sign up</a>
    </li>
</ul>`;
}
export const buildAuthenticatedSession = () => {
    return `<button>Cerrar sesión</button>`;
}