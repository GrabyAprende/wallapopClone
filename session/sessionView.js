
export const buildUnauthorizedSession = () => { //cuando no inicie sesion
    return `
<ul>
    <li>
        <a href="./login.html">Login</a>
    </li>
    <li>
        <a href="./register.html">Regístrate</a>
    </li>
</ul>`;
}
export const buildAuthenticatedSession = () => {
    return `<button>Cerrar sesión</button>`;
}