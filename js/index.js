const requestURL = 'https://api.disneyapi.dev/character?page=1&limit=100';

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

function createCharacterCard({ name, image }) {
    return `
        <div class="card" style="width: 18rem;" id="cardDisney">
            <img src="${image}" class="card-img-top" alt="Imagen del personaje" style="max-height: 350px; object-fit: contain; width: 100%;">
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
        const disneyCards = characterData.items.map(createCharacterCard).join('');
        characterSection.innerHTML = disneyCards;
    } else {
        characterSection.innerHTML = '<p>No se pudieron cargar los personajes de Disney.</p>';
    }
}

displayCharacters();