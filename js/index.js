
const BASE_URL = 'https://api.disneyapi.dev/character?page=';
const PER_PAGE   = 32;                       
let   currentPage = 1;                        
let   totalPages  = 1;                        


const characterSection = document.getElementById('characterSection');
const paginationNav    = document.getElementById('paginationNav');   

async function fetchCharactersJson(page = 1) {
    try {
        const res = await fetch(`${BASE_URL}${page}&pageSize=${PER_PAGE}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        totalPages = data.totalPages;   
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}


function createCharacterCard({ name, imageUrl, allies, enemies, films, shortFilms, tvShows, videoGames, parkAttractions}) {
    const safeJoin = arr => (Array.isArray(arr) && arr.length) ? arr.join(', ') : 'Sin datos';

        const checkPlaceholder = `if(this.naturalWidth===200 && this.naturalHeight===114){this.onerror=null;this.src='../img/LOGO_DATALAND copia.png'}`;

    const imgTag = `
    <img src="${imageUrl}"
    class="card-img-top"
    alt="${name}"
    style="max-height:350px;object-fit:contain;width:100%;"
    onload="${checkPlaceholder}"
    onerror="this.onerror=null;this.src='../img/datalandWhite.png'">`;



    return `
        <div class="card" style="width: 18rem;">
            ${imgTag}
            <div class="card-body">
                <h5 class="card-title">Nombre: ${name}</h5>
                <h6 class="card-allies">Aliados: ${safeJoin(allies)}</h6>
                <h6 class="card-enemies">Enemigos: ${safeJoin(enemies)}</h6>
                <h6 class="card-films">Películas: ${safeJoin(films)}</h6>
                <h6 class="card-shorts">Cortos: ${safeJoin(shortFilms)}</h6>
                <h6 class="card-shows">Series: ${safeJoin(tvShows)}</h6>
                <h6 class="card-games">Video Juegos: ${safeJoin(videoGames)}</h6>
                <h6 class="card-attractions">Atracciones: ${safeJoin(parkAttractions)}</h6>
            </div>
        </div>`;
}


async function displayCharacters(page = 1) {
    const data = await fetchCharactersJson(page);
    if (!data || !data.data) {
        characterSection.innerHTML = '<p>No se ha podido cargar el personaje.</p>';

        paginationNav.innerHTML = '';

        return;
    }

    characterSection.innerHTML = data.data.map(createCharacterCard).join('');
    renderPagination();
}

function renderPagination() {
    const html = `
        <img 
            src="../img/goofy.png"
            class="page-btn prevBtn"
            alt="Página anterior"
        >

        <span class="page-info">Página ${currentPage}</span>

        <img 
            src="../img/plutoRight.png"
            class="page-btn nextBtn"
            alt="Página siguiente"
        >
    `;

    document.getElementById('paginationTop').innerHTML = html;
    document.getElementById('paginationBottom').innerHTML = html;

    document.querySelectorAll('.prevBtn').forEach(btn =>
        btn.onclick = () => changePage(currentPage - 1)
    );

    document.querySelectorAll('.nextBtn').forEach(btn =>
        btn.onclick = () => changePage(currentPage + 1)
    );
}



/*function renderPagination() {
    const html= `
        <button class="prevBtn btn btn-sm btn-primary" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>
        <span>Página ${currentPage} </span>
        <button class="nextBtn btn btn-sm btn-primary" ${currentPage === totalPages ? 'disabled' : ''}>Siguiente</button>`;
        
        document.getElementById('paginationTop').innerHTML    = html;
        document.getElementById('paginationBottom').innerHTML = html;

        document.querySelectorAll('.prevBtn').forEach(b => b.onclick = () => changePage(currentPage - 1));
        document.querySelectorAll('.nextBtn').forEach(b => b.onclick = () => changePage(currentPage + 1));

/*        document.querySelectorAll('.pagination-wrapper').forEach(wrapper => wrapper.innerHTML = html);
        document.querySelectorAll('.prevBtn').forEach(btn =>btn.onclick = () => changePage(currentPage - 1));
        document.querySelectorAll('.nextBtn').forEach(btn =>btn.onclick = () => changePage(currentPage + 1));

    document.getElementById('prevBtn').addEventListener('click', () => changePage(currentPage - 1));
    document.getElementById('nextBtn').addEventListener('click', () => changePage(currentPage + 1));
}*/

function changePage(newPage) {
    if (newPage < 1 || newPage > totalPages) return;
    currentPage = newPage;
    displayCharacters(currentPage);

    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

displayCharacters(currentPage);