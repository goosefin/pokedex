let pokeName = document.querySelector('#poke-name')
let search = document.querySelector('#search')
let pokeInfo = document.querySelector('#poke-info')
let pokeHeight = document.querySelector('#height')
let pokeAbilities = document.querySelector('#abilities')
let pokeMoves = document.querySelector('#moves')

const abilities = (pokemon) => {
    for(let skill of pokemon.abilities){
        console.log(skill.ability.name)
    }
}

let check = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokeName.value+'/')
        .then((response) => response.json())
        .then((data) => {
            let abilitiesLimit = 3
            for(let ability of data.abilities){
                abilitiesLimit -= 1
                pokeAbilities.innerText += ' ' + ability.ability.name + ', '
                if(abilitiesLimit === 0){
                    break
                }
            }
            pokeHeight.innerText = 'Height: ' + data.height 
            let movesLimit = 3
            for(let move of data.moves){
                movesLimit -= 1
                pokeMoves.innerText += ' ' + move.move.name + ', '
                if(movesLimit === 0){
                    break
                }
            }
            pokeInfo.innerText = data.name
        })
}

let list = ['a','b','c']
let string =''
for(let val of list){
    string += val + ' '
    //console.log(string)
}

search.addEventListener('click',check)