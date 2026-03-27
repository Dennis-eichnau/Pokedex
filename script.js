let nextPokemonUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
let pokemonList = [];
const allPokemon = [];
let filteredPokemon = [];
let isSearchActive = false;

async function init() {
  loadingSpinner();
  await fetchPokemonList();
}

async function fetchPokemonList() {
  const response = await fetch(nextPokemonUrl);
  const reseponseAsJson = await response.json();
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
  const currentList = isSearchActive ? filteredPokemon : allPokemon;
  const SECOND_TYPE = currentList[index].types[1];
  const TYPE_CONTAINER = document.getElementById(`pokemon-types-${index}`);
  if (SECOND_TYPE) {
    TYPE_CONTAINER.innerHTML += getSecondTypeTemplate(SECOND_TYPE.type.name);
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
  const input = document.getElementById("search").value.toLowerCase();
  isSearchActive = input.length >= 3;
  
  document.getElementById("pokemon").innerHTML = "";

  if (isSearchActive) {
    filteredPokemon = allPokemon.filter(p => p.name.includes(input));
    renderFilteredPokemon(filteredPokemon);
  } else {
    renderPokemon();
  }

  toggleSearchUI(input.length);
}

function toggleSearchUI(len) {
  const popup = document.getElementById("myPopup");
  (len > 0 && len < 3) ? popup.classList.add("show") : popup.classList.remove("show");
  isSearchActive ? btnDnone() : btnBlock();
}

async function loadNextPokemon() {
  document.getElementById("pokemon").innerHTML = "";
  fetchPokemonList();
  disabledLoadingSpinner();
}

function currentOverlayRight(index) {
  const currentList = isSearchActive ? filteredPokemon : allPokemon;
  const listLength = currentList.length;
  index = (index + listLength) % listLength;
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
  document.getElementById("myPopup").classList.add("show");
}

function btnDnone() {
  document.getElementById("btn").classList.add("d_none");
}

function btnBlock() {
  document.getElementById("btn").classList.remove("d_none");
}