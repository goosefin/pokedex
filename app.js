let searchName = document.querySelector('#search-name')
let search = document.querySelector('#search')
let pokeInfo = document.querySelector('#poke-info')
let pokeHeight = document.querySelector('#height')
let pokeAbilities = document.querySelector('#abilities')
let pokeMoves = document.querySelector('#moves')
let pokeImg = document.querySelector('#picture')
let pokeName = document.querySelector('#poke-name')

let check = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+searchName.value+'/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.types[0].type.name)
            let abilitiesLimit = 3
            if(data.abilities.length < 3){
                abilitiesLimit = data.abilities.length
            }
            let abilitiesList = []
            for(let ability of data.abilities){
                abilitiesLimit -= 1
                abilitiesList.push(ability.ability.name)
                if(abilitiesLimit === 0){
                    pokeAbilities.innerText = `Abilities: ${[...abilitiesList]}`
                    break
                }
            }
            pokeHeight.innerText = 'Height: ' + data.height 
            let movesLimit = 3
            if(data.moves.length < 3){
                movesLimit = data.moves.length
            }
            let movesList = []
            for(let move of data.moves){
                movesLimit -= 1
                movesList.push(move.move.name)
                //pokeMoves.innerText += ' ' + move.move.name + ', '
                if(movesLimit === 0){
                    pokeMoves.innerText = `Top Moves: ${[...movesList]}`
                    break
                }
            }
            pokeImg.setAttribute("src",`${data.sprites.front_default}`)
            pokeName.innerText = data.name
        })
}


search.addEventListener('click',check)