class myHeader extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
    <header>
        <div class="header">
            <img src="../img/datalandWhite.png" width="200px">
            <h1 class="disney-title">Bienvenidos al maravilloso mundo de los personajes Disney</h1>
          
        </div>
    </header>


    `;

    }
}

customElements.define("my-custom-header", myHeader);