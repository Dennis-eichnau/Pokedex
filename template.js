function getPokemonTemplate(index) {
    return `
          <div onclick="pokemonOverlayOn(${index})" class="card">
              <div class="card-name-id">
                  <span>#${allPokemon[index].id}</span>
                  <h3>${allPokemon[index].name}</h3>
              </div>
  
             <div class=" ${allPokemon[index].types[0].type.name} card-pokemon-img ">
                  <img class="${allPokemon[index].types[0].type.name} fokus-img" src="${allPokemon[index].sprites.other.dream_world.front_default}">
               </div>
  
               <div id="pokemon-types-${index}" class="card-pokemon-type" >
                  <img class="${allPokemon[index].types[0].type.name}" src="./assets/icons-type/${allPokemon[index].types[0].type.name}.svg"> 
                </div>
          </div>
      `;
  }

  function getOverlayPokemonTemplate(index) {
    return `
            <div onclick="stopPropagation(event)" class="overlay-pokemon-container">
                
                <div class="overlay-card-name-id">
                  <span>#${allPokemon[index].id}</span>
                  <h3>${allPokemon[index].name}</h3>
                </div>
  
                <div class="overlay-card-pokemon-img ${allPokemon[index].types[0].type.name}">
                  <img src="${allPokemon[index].sprites.other.dream_world.front_default}">
                </div>
  
                <div class="overlay-switch-button">
                  <button onclick="currentOverlayRight(${index - 1})" class="overlay-btn"><</button>
                  <button onclick="currentOverlayRight(${index + 1})" class="overlay-btn">></button>
                </div>
  
                <div class="overlay-pokemon-description">
                  <span> Height: ${allPokemon[index].height} m</span>
                  <span> Weight : ${allPokemon[index].weight} kg</span>
                </div>
  
                <div class="overlay-sprites-container">
                  <img src="${allPokemon[index].sprites.back_default}">
                   <img src="${allPokemon[index].sprites.front_default}">
                  <img src="${allPokemon[index].sprites.back_shiny}">
                  <img src="${allPokemon[index].sprites.front_shiny}">
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
  
             <div class=" ${filteredPokemon[index].types[0].type.name} card-pokemon-img ">
                  <img class="${filteredPokemon[index].types[0].type.name} fokus-img" src="${filteredPokemon[index].sprites.other.dream_world.front_default}">
               </div>
  
               <div id="pokemon-types-${index}" class="card-pokemon-type" >
                  <img class="${filteredPokemon[index].types[0].type.name}" src="./assets/icons-type/${filteredPokemon[index].types[0].type.name}.svg"> 
                </div>
          </div>
      `;
  }

  function getNotFilteredPokemonTemplate(){
    return `

        <h1 class="no-found"> Kein Pokemon gefunden !!!</h1>
    
    `
  }