const requestURL = 'https://api.disneyapi.dev/character';

async function fetchCharactersJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los personajes de Disney:', error);
        return null;
    }
}

function createCharacterCard({ name, imageUrl, films, videoGames }) {
    return `
        <div class="card" style="width: 18rem;">
            <img 
                src="${imageUrl || 'https://via.placeholder.com/300x400'}"
                class="card-img-top"
                alt="Imagen de ${name}"
                style="max-height: 350px; object-fit: contain; width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5> 
                <h6>Videojuegos: ${videoGames}</h6>
                <h6>Pelicula: ${films}</h6>

            </div>
        </div>
    `;
}

if (typeof module !== 'undefined') {
    module.exports = { createCharacterCard };
}

async function displayCharacters() {
    const characterSection = document.getElementById('characterSection');
    const characterData = await fetchCharactersJson();

    if (characterData && characterData.data) {
        const houseCards = characterData.data.map(createCharacterCard).join('');
        characterSection.innerHTML = houseCards;
    } else {
        characterSection.innerHTML = '<p>No se pudieron cargar los personajes de Disney.</p>';
    }
}

displayCharacters();