function renderPokemon() {
  const POKEMON_CONTAINER = document.getElementById("pokemon");
  
  for (let index = 0; index < allPokemon.length; index++) {
    POKEMON_CONTAINER.innerHTML += getPokemonTemplate(index);
    checkSecondType(index);
  }
}

function renderOverlayPokemon(index) {
  const currentPokemon = document.getElementById("overlay-content");
  currentPokemon.innerHTML = getOverlayPokemonTemplate(index);
}

function renderFilteredPokemon(filteredPokemon) {
  const POKEMON_CONTAINER = document.getElementById("pokemon");
  
  if (filteredPokemon.length == 0) {
    POKEMON_CONTAINER.innerHTML = getNotFilteredPokemonTemplate();
  }
  
  for (let index = 0; index < filteredPokemon.length; index++) {
    POKEMON_CONTAINER.innerHTML += getFilteredPokemonTemplate(index);
    checkSecondType(index);
  }
}