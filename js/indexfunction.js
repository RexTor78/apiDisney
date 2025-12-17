<<<<<<< .merge_file_jWGIWk
const requestURL = 'https://api.disneyapi.dev/character';
=======
const requestURL = 'https://dragonball-api.com/api/characters?page=1&limit=58';
>>>>>>> .merge_file_RmdpDn

async function fetchCharactersJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
<<<<<<< .merge_file_jWGIWk
        console.error('Error al obtener los personajes de Disney:', error);
=======
        console.error('Error al obtener los personajes de Dragon Ball:', error);
>>>>>>> .merge_file_RmdpDn
        return null;
    }
}

<<<<<<< .merge_file_jWGIWk
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

=======
function createCharacterCard({ name, image }) {
    return `
        <div class="card" style="width: 18rem;" id="cardHouse">
            <img src="${image}" class="card-img-top" alt="Imagen de la casa" style="max-height: 350px; object-fit: contain; width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                
>>>>>>> .merge_file_RmdpDn
            </div>
        </div>
    `;
}

<<<<<<< .merge_file_jWGIWk
=======
// Export para testing
>>>>>>> .merge_file_RmdpDn
if (typeof module !== 'undefined') {
    module.exports = { createCharacterCard };
}

async function displayCharacters() {
    const characterSection = document.getElementById('characterSection');
    const characterData = await fetchCharactersJson();

<<<<<<< .merge_file_jWGIWk
    if (characterData && characterData.data) {
        const houseCards = characterData.data.map(createCharacterCard).join('');
        characterSection.innerHTML = houseCards;
    } else {
        characterSection.innerHTML = '<p>No se pudieron cargar los personajes de Disney.</p>';
    }
}

displayCharacters();
=======
    if (characterData && characterData.items) {
        const houseCards = characterData.items.map(createCharacterCard).join('');
        characterSection.innerHTML = houseCards;
    } else {
        characterSection.innerHTML = '<p>No se pudieron cargar los personajes de Dragon Ball.</p>';
    }
}

displayCharacters();
>>>>>>> .merge_file_RmdpDn
