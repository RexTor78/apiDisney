const requestURL = 'https://dragonball-api.com/api/characters?page=1&limit=58';

async function fetchCharactersJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener los personajes de Dragon Ball:', error);
        return null;
    }
}

function createCharacterCard({ name, image }) {
    return `
        <div class="card" style="width: 18rem;" id="cardHouse">
            <img src="${image}" class="card-img-top" alt="Imagen de la casa" style="max-height: 350px; object-fit: contain; width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                
            </div>
        </div>
    `;
}

// Export para testing
if (typeof module !== 'undefined') {
    module.exports = { createCharacterCard };
}

async function displayCharacters() {
    const characterSection = document.getElementById('characterSection');
    const characterData = await fetchCharactersJson();

    if (characterData && characterData.items) {
        const houseCards = characterData.items.map(createCharacterCard).join('');
        characterSection.innerHTML = houseCards;
    } else {
        characterSection.innerHTML = '<p>No se pudieron cargar los personajes de Dragon Ball.</p>';
    }
}

displayCharacters();
