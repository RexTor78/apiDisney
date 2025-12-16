const footerHTML = `
    <footer style="
        text-align: center;
        padding: 15px;
        background-color: #E32636; 
        color: white;
        font-size: 0.85em;
        margin-top: 40px;
    ">
        <p style="margin: 5px 0;">&copy; ${new Date().getFullYear()} - El Mundo Mágico de Disney. Todos los derechos reservados.</p>
        <p style="margin: 5px 0;">Hecho con amor y magia por un grupo de desarrolladores Juniors fanáticos de Disney.</p><p><img src="assets/img/logo disney.png" alt="Logo de Disney" width="50" height="auto"></p>
    </footer>
`;

function createDisneyFooter() {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', createDisneyFooter);