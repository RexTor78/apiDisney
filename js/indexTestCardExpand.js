const BASE_URL = 'https://api.disneyapi.dev/character?page=';
const PER_PAGE = 32;

let currentPage = 1;
let totalPages = 1;
let allCharacters = []; // 🔑 memoria para el modal

const characterSection = document.getElementById('characterSection');
const paginationTop = document.getElementById('paginationTop');
const paginationBottom = document.getElementById('paginationBottom');



// ================= FETCH =================
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


// ================= CARD =================
function createCharacterCard(character) {
    const safeJoin = arr => (Array.isArray(arr) && arr.length) ? arr.join(', ') : 'Sin datos';

    return `
        <div class="card" data-id="${character._id}">
            <img src="${character.imageUrl}" alt="${character.name}">
            <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <h6 class="card-films">Películas: ${safeJoin(character.films)}</h6>
                <h6 class="card-shows">Series: ${safeJoin(character.tvShows)}</h6>
                <h6 class="card-games">Videojuegos: ${safeJoin(character.videoGames)}</h6>
            </div>
        </div>
    `;
}


// ================= RENDER =================
async function displayCharacters(page = 1) {
    const data = await fetchCharactersJson(page);
    if (!data || !data.data) return;

    allCharacters = data.data; // 🔑 guardamos
    characterSection.innerHTML = allCharacters.map(createCharacterCard).join('');
    renderPagination();
}


// ================= MODAL =================
function openModal(character) {
    const modal = document.getElementById('characterModal');
    const body = document.getElementById('modalBody');

    const safeJoin = arr => (Array.isArray(arr) && arr.length) ? arr.join(', ') : 'Sin datos';

    body.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.imageUrl}" style="width:100%; max-height:400px; object-fit:contain;">
        <p><strong>Películas:</strong> ${safeJoin(character.films)}</p>
        <p><strong>Series:</strong> ${safeJoin(character.tvShows)}</p>
        <p><strong>Videojuegos:</strong> ${safeJoin(character.videoGames)}</p>
        <p><strong>Atracciones:</strong> ${safeJoin(character.parkAttractions)}</p>
    `;

    modal.classList.add('active');
    document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('characterModal').classList.remove('active');
});


}



// ================= PAGINACIÓN =================
function renderPagination() {
    const html = `
        <img src="../img/goofy.png" class="page-btn prevBtn">
        <span class="page-info">Página ${currentPage}</span>
        <img src="../img/plutoRight.png" class="page-btn nextBtn">
    `;

    paginationTop.innerHTML = html;
    paginationBottom.innerHTML = html;

    document.querySelectorAll('.prevBtn').forEach(btn =>
        btn.onclick = () => changePage(currentPage - 1)
    );
    document.querySelectorAll('.nextBtn').forEach(btn =>
        btn.onclick = () => changePage(currentPage + 1)
    );
}

function changePage(newPage) {
    if (newPage < 1 || newPage > totalPages) return;
    currentPage = newPage;
    displayCharacters(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

displayCharacters(currentPage);

characterSection.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (!card) return;

    const id = card.dataset.id;
    const character = allCharacters.find(c => c._id === id);

    console.log('CLICK EN:', character); // 👈 DEBUG

    if (character) openModal(character);
});
