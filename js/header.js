/* const headerContent = `
    <h1>Explora el Mundo Mágico de Disney</h1>
            <img src="assets/img/logoDisneyHector.png" alt="Logo de Disney" class="header-logo">
        
    <nav>
        </nav>
`;
function createDisneyHeader() {
    const header = document.createElement('header');
    header.classList.add('disney-header');
    header.innerHTML = headerContent;
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.parentNode.insertBefore(header, mainElement);} 
        else {
        document.body.prepend(header);
    }
}
document.addEventListener('DOMContentLoaded', createDisneyHeader); */

class myHeader extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
    Explora el Mundo Mágico de Disney
        <img src="img/shared/logo.png" alt="Logo de Disney" class="header-logo">


    `;

    }
}

customElements.define("my-custom-header", myHeader);
