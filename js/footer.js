/* const footerHTML = `
        <p>&copy; ${new Date().getFullYear()} - El Mundo Mágico de Disney. Todos los derechos reservados.</p>
        <p">Hecho con amor y magia por un grupo de desarrolladores Juniors fanáticos de Disney.</p><p><img src="img/shared/logo.png" alt="Logo de Disney" width="50" height="auto"></p>
    </footer>
`;

function createDisneyFooter() {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', createDisneyFooter); */

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer-disney" id="footerMenu">
            <p>- El Mundo Mágico de Disney. Todos los derechos reservados.</p>
            <p">Hecho con amor y magia por un grupo de desarrolladores Juniors fanáticos de Disney.</p>
            <p><img src="img/shared/logo.png" alt="Logo de Disney" width="50" height="auto"></p>
        </footer>
        `;


    }
}

/* Registramos el custom element */
customElements.define('my-custom-footer', MyFooter); */