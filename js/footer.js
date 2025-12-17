class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer" id="footerMenu">
            <div class="footer-content">

                <img 
                    src="../img/datalandWhite.png"
                    alt="Logo dataland Disney"
                    class="footer-icon"
                >

                <p class="footer-text">
                    El Mundo Mágico de Disney. Todos los derechos reservados.<br>
                    Hecho con amor y magia por un grupo de desarrolladores Juniors fanáticos de Disney.
                </p>

            </div>
        </footer>
        `;
    }
}

customElements.define('my-custom-footer', MyFooter);
