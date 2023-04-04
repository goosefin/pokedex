let pokeName = document.querySelector('#poke-name')
let search = document.querySelector('#search')
let pokeInfo = document.querySelector('#poke-info')

const abilities = (pokemon) => {
    for(let skill of pokemon.abilities){
        console.log(skill.ability.name)
    }
}

let check = () => {
    //console.log(pokeName.value)
    //console.log('https://pokeapi.co/api/v2/pokemon/'+pokeName.value+'/')
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokeName.value+'/')
        .then((response) => response.json())
        .then((data) => {
            for(let skill of data.abilities){
                console.log(skill.ability.name)
            }
            console.log(data.height)
            for(let move of data.moves){
                console.log(move.move.name)
            }
            pokeInfo.innerText = data.name
        })
}

search.addEventListener('click',check)