let baseUrl = "https://pokeapi.co/api/v2/pokemon/"
let containerDiv = document.getElementById(`container`)
let searchDiv = document.getElementById(`searchContainer`)
let PokeDiv = null;

    let getPokeResults = (e) => {
        e.preventDefault();
        let searchInput = document.getElementById("search").value;
        console.log(`Search Input: ${searchInput}`);

        searchContainer.textContent = ""
    
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
        .then(res => res.json())
        .then(data => {
            displayResults(data);
        })
        .catch((err) => {
            console.log("Pokemon not found", err);
            searchContainer.textContent = "Who's that Pokemon? We don't know!"
        });
    }

function DefaultImg(Original,ImageTag) {
    console.log("Default Image")
        ImageTag.src = Original
}

function ShinyImg(Shiny,ImageTag) {
    console.log("Shiny Image")
        ImageTag.src = Shiny
}

function displayResults(pokemon) {
    console.log(pokemon.species.name)
    if(containerDiv.firstElementChild != null) {
        containerDiv.removeChild(PokeDiv)
    } else {null}

    PokeDiv = document.createElement('div')
    let PokeImgDiv = document.createElement('div')
    let PokeStatsDiv = document.createElement('div')
    let PokeInfoDiv = document.createElement('div')
    let PokeHeightDiv = document.createElement('div')
    let PokeWeightDiv = document.createElement('div')
    
    let pokeSprites = document.createElement('img')
    pokeSprites.src = pokemon.sprites.front_default;
    PokeImgDiv.appendChild(pokeSprites)

    let pokeName = document.createElement('h3')
    pokeName.textContent = `${pokemon.species.name} #${pokemon.id}`
    PokeInfoDiv.appendChild(pokeName)

    let pokeHeight = document.createElement('p')
    pokeHeight.textContent = `Height: ${pokemon.height}`
    PokeHeightDiv.appendChild(pokeHeight)

    let pokeWeight = document.createElement('p')
    pokeWeight.textContent = ` Weight: ${pokemon.weight}`
    PokeWeightDiv.appendChild(pokeWeight)

    let pokeStatsHP = document.createElement('p')
    pokeStatsHP.textContent = `HP: ${pokemon.stats[0].base_stat}`
    PokeStatsDiv.appendChild(pokeStatsHP)
    
    let pokeStatsAtk = document.createElement('p')
    pokeStatsAtk.textContent = `Attack: ${pokemon.stats[1].base_stat}`
    PokeStatsDiv.appendChild(pokeStatsAtk)

    let pokeStatsDef = document.createElement('p')
    pokeStatsDef.textContent = `Defense: ${pokemon.stats[2].base_stat}`
    PokeStatsDiv.appendChild(pokeStatsDef)

    let pokeStatsSpAtk = document.createElement('p')
    pokeStatsSpAtk.textContent = `Special Attack: ${pokemon.stats[3].base_stat}`
    PokeStatsDiv.appendChild(pokeStatsSpAtk)

    let pokeStatsSpDef = document.createElement('p')
    pokeStatsSpDef.textContent = `Special Defense: ${pokemon.stats[4].base_stat}`
    PokeStatsDiv.appendChild(pokeStatsSpDef)

    let pokeStatsSpeed = document.createElement('p')
    pokeStatsSpeed.textContent = `Speed: ${pokemon.stats[5].base_stat}`
    PokeStatsDiv.appendChild(pokeStatsSpeed)
    
    let pokeTypes = document.createElement('h5')
    switch(pokemon.types.length) {
        case 2: 
        pokeTypes.textContent = pokemon.types[0].type.name + "/" + pokemon.types[1].type.name
        break;
        case 1:
            pokeTypes.textContent = pokemon.types[0].type.name
            break;
            default:
                break;
            }
            PokeImgDiv.appendChild(pokeTypes)
            
    let pokeButtonDiv = document.createElement('div')

    let pokeOriginal = document.createElement("button")
    pokeOriginal.textContent="Original"
    pokeOriginal.addEventListener("click",() => {
        DefaultImg(pokemon.sprites.front_default, pokeSprites)
    })

    let pokeShiny = document.createElement("button")
    pokeShiny.textContent="Shiny"
    pokeShiny.addEventListener("click",() => {
        ShinyImg(pokemon.sprites.front_shiny, pokeSprites)
    })

    pokeButtonDiv.appendChild(pokeOriginal)
    pokeButtonDiv.appendChild(pokeShiny)

    
    PokeInfoDiv.setAttribute("id","PokeInfo")
    PokeStatsDiv.setAttribute("id","PokeStats")
    PokeImgDiv.setAttribute("id","PokeImg")
    PokeHeightDiv.setAttribute("id","PokeHeight")
    PokeWeightDiv.setAttribute("id","PokeWeight")
    pokeButtonDiv.id = "pokeButtons"
    pokeOriginal.id = "PokemonOriginal"
    pokeShiny.id = "PokemonShiny"

    containerDiv.appendChild(PokeDiv)
    PokeDiv.appendChild(PokeImgDiv)
    PokeDiv.appendChild(PokeStatsDiv)
    PokeDiv.appendChild(PokeInfoDiv)
    PokeDiv.appendChild(PokeHeightDiv)
    PokeDiv.appendChild(PokeWeightDiv)
    PokeDiv.appendChild(pokeButtonDiv)
}
