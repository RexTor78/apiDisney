
const BASE_URL = 'https://api.disneyapi.dev/character?page=';
const PER_PAGE   = 64;                       
let   currentPage = 1;                        
let   totalPages  = 1;                        


const characterSection = document.getElementById('characterSection');
const paginationNav    = document.getElementById('paginationNav');   // <div id="paginationNav"></div>


async function fetchCharactersJson(page = 1) {
    try {
        const res = await fetch(`${BASE_URL}${page}&pageSize=${PER_PAGE}`);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        totalPages = data.totalPages;   // la API lo devuelve siempre
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}


function createCharacterCard({ name, imageUrl, films, tvShows, videoGames }) {
    const safeJoin = arr => (Array.isArray(arr) && arr.length) ? arr.join(', ') : 'No one';


    return `
        <div class="card" style="width: 18rem;">
            <img src="${imageUrl}" class="card-img-top" alt="${name}" style="max-height:350px; object-fit:contain;">
            <div class="card-body">
                <h5 class="card-title">Name: ${name}</h5>
                <h6 class="card-films">Film: ${safeJoin(films)}</h6>
                <h6 class="card-shows">TV Shows: ${safeJoin(tvShows)}</h6>
                <h6 class="card-games">Video Games: ${safeJoin(videoGames)}</h6>
            </div>
        </div>`;
}


async function displayCharacters(page = 1) {
    const data = await fetchCharactersJson(page);
    if (!data || !data.data) {
        characterSection.innerHTML = '<p>No se pudieron cargar los personajes.</p>';
        return;
    }
    characterSection.innerHTML = data.data.map(createCharacterCard).join('');
    renderPagination();
}


function renderPagination() {
    paginationNav.innerHTML = `
        <button id="prevBtn" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>
        <span>Página ${currentPage} de ${totalPages}</span>
        <button id="nextBtn" ${currentPage === totalPages ? 'disabled' : ''}>Siguiente</button>`;


    document.getElementById('prevBtn').addEventListener('click', () => changePage(currentPage - 1));
    document.getElementById('nextBtn').addEventListener('click', () => changePage(currentPage + 1));
}

function changePage(newPage) {
    if (newPage < 1 || newPage > totalPages) return;
    currentPage = newPage;
    displayCharacters(currentPage);
}

displayCharacters(currentPage);