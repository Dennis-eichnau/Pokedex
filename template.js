function getPokemonTemplate(index) {
  return `
    <div onclick="pokemonOverlayOn(${index})" class="card">
      <div class="card-name-id">
        <span>#${allPokemon[index].id}</span>
        <h3>${allPokemon[index].name}</h3>
      </div>

      <div class="${allPokemon[index].types[0].type.name} card-pokemon-img">
        <img class="${allPokemon[index].types[0].type.name} fokus-img" src="${allPokemon[index].sprites.other.dream_world.front_default}">
      </div>

      <div id="pokemon-types-${index}" class="card-pokemon-type">
        <img class="${allPokemon[index].types[0].type.name}" src="./assets/icons-type/${allPokemon[index].types[0].type.name}.svg"> 
      </div>
    </div>
  `;
}

function getOverlayPokemonTemplate(index) {
  const currentPokemon = isSearchActive ? filteredPokemon[index] : allPokemon[index];

  return `
    <div onclick="stopPropagation(event)" class="overlay-pokemon-container">
      <button class="overlay-close-btn" onclick="pokemonOverlayOff()">X</button>
      
      <div class="overlay-card-name-id">
        <span>#${currentPokemon.id}</span>
        <h3>${currentPokemon.name}</h3>
      </div>

      <div class="overlay-card-pokemon-img ${currentPokemon.types[0].type.name}">
        <img src="${currentPokemon.sprites.other.dream_world.front_default}">
      </div>

      <div class="overlay-switch-button">
        <button onclick="currentOverlayRight(${index - 1})" class="overlay-btn"><</button>
        <button onclick="currentOverlayRight(${index + 1})" class="overlay-btn">></button>
      </div>

      <div class="overlay-pokemon-description">
        <span>Height: ${currentPokemon.height} m</span>
        <span>Weight: ${currentPokemon.weight} kg</span>
      </div>
    </div>
  `;
}

function getFilteredPokemonTemplate(index) {
  return `
    <div onclick="pokemonOverlayOn(${index})" class="card">
      <div class="card-name-id">
        <span>#${filteredPokemon[index].id}</span>
        <h3>${filteredPokemon[index].name}</h3>
      </div>

      <div class="${filteredPokemon[index].types[0].type.name} card-pokemon-img">
        <img class="${filteredPokemon[index].types[0].type.name} fokus-img" src="${filteredPokemon[index].sprites.other.dream_world.front_default}">
      </div>

      <div id="pokemon-types-${index}" class="card-pokemon-type">
        <img class="${filteredPokemon[index].types[0].type.name}" src="./assets/icons-type/${filteredPokemon[index].types[0].type.name}.svg"> 
      </div>
    </div>
  `;
}

function getNotFilteredPokemonTemplate() {
  return `
    <h1 class="no-found">No Pokemon found !!!</h1>
  `;
}

function getSecondTypeTemplate(typeName) {
  return `
    <img class="${typeName}" src="./assets/icons-type/${typeName}.svg"> 
  `;
}