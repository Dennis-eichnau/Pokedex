let nextPokemonUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
let pokemonList = [];
let allPokemon = [];
let filteredPokemon = [];

async function init() {
  loadingSpinner();
  await fetchPokemonList(); 
}

async function fetchPokemonList() {
  let response = await fetch(nextPokemonUrl);
  let reseponseAsJson = await response.json();
  getPokemonForList(reseponseAsJson);
  nextPokemonUrl = reseponseAsJson.next;
  loadingSpinner();
}

async function getPokemonForList(pokeList) {
  pokemonList = pokeList.results;
  await getSinglePokemonData(pokemonList);
}

async function getSinglePokemonData(pokemonList) {
  for (let pokemonIndex = 0; pokemonIndex < pokemonList.length; pokemonIndex++) {
    const RESPONSE = await fetch(pokemonList[pokemonIndex].url);
    const SINGLE_POKEMON = await RESPONSE.json();
    allPokemon.push(SINGLE_POKEMON);
  }
  renderPokemon();
  disabledLoadingSpinner();
}

function checkSecondType(index) {
  const SECOND_TYPE = allPokemon[index].types[1];
  const TYPE_CONTAINER = document.getElementById(`pokemon-types-${index}`);
  if (SECOND_TYPE) {
    TYPE_CONTAINER.innerHTML += `<img class="${SECOND_TYPE.type.name}" src="./assets/icons-type/${SECOND_TYPE.type.name}.svg"> `;
  }
}

function pokemonOverlayOn(index) {
  const dialog = document.getElementById("overlay");
  renderOverlayPokemon(index);
  dialog.showModal();
  document.getElementById("body").classList.add("no-scroll");
}

function pokemonOverlayOff() {
  const dialog = document.getElementById("overlay");
  dialog.close();
  document.getElementById("body").classList.remove("no-scroll");
}

function searchPokemon() {
  const POKEMON_CONTAINER = document.getElementById("pokemon");
  let searchInput = document.getElementById("search").value.toLowerCase();
  const popup = document.getElementById("myPopup");

  if (searchInput.length >= 3) {
    POKEMON_CONTAINER.innerHTML = "";
    filteredPokemon = allPokemon.filter((pokemon) => {
      return pokemon.name.includes(searchInput);
    });
    renderFilteredPokemon(filteredPokemon);
    
    popup.classList.remove("show"); 
    btnDnone(); 
  } 
  else if (searchInput.length > 0 && searchInput.length < 3) {
    POKEMON_CONTAINER.innerHTML = "";
    renderPokemon(); 
    
    popup.classList.add("show"); 
    btnBlock(); 
  } 
  else {
    // Hier greift die Logik, wenn das Feld wieder komplett leer ist (0 Buchstaben)
    POKEMON_CONTAINER.innerHTML = "";
    renderPokemon(); 
    
    popup.classList.remove("show"); 
    btnBlock(); 
  }
}

async function loadNextPokemon() {
  const POKEMON_CONTAINER = document.getElementById("pokemon");
  POKEMON_CONTAINER.innerHTML = "";
  fetchPokemonList();
  disabledLoadingSpinner();
}

function currentOverlayRight(index) {
  let indexAll = allPokemon.length;
  index = (index + indexAll) % indexAll;
  renderOverlayPokemon(index);
}

function stopPropagation(event) {
  event.stopPropagation();
}

function loadingSpinner() {
  document.getElementById("loader").style.display = "flex";
}

function disabledLoadingSpinner() {
  document.getElementById("loader").style.display = "none";
}

function popupSearchInput() {
  const popup = document.getElementById("myPopup");
  popup.classList.add("show");
}

function btnDnone() {
  const button = document.getElementById("btn");
  button.classList.add("d_none");
}

function btnBlock() {
  const button = document.getElementById("btn");
  button.classList.remove("d_none"); 
}