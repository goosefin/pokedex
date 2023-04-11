let searchName = document.querySelector('#search-name')
let search = document.querySelector('#search')
let pokeInfo = document.querySelector('#poke-info')
let pokeHeight = document.querySelector('#height')
let pokeAbilities = document.querySelector('#abilities')
let pokeMoves = document.querySelector('#moves')
let pokeImg = document.querySelector('#picture')
let pokeName = document.querySelector('#poke-name')
let pokeHp = document.querySelector('#hp')
let hpLab = document.querySelector('#hp-lab')
let attackLab = document.querySelector('#attack-lab')
let defenseLab = document.querySelector('#defense-lab')
let spAttackLab = document.querySelector('#sp-attack-lab')
let spDefenseLab = document.querySelector('#sp-defense-lab')
let speedLab = document.querySelector('#speed-lab')
let pokeAttack = document.querySelector('#attack')
let pokeDefense = document.querySelector('#defense')
let pokeSpAttack = document.querySelector('#sp-attack')
let pokeSpDefense = document.querySelector('#sp-defense')
let pokeSpeed = document.querySelector('#speed')

const addAttributes = (selector,data,num) =>{
    selector.innerText = data.stats[num].base_stat
    selector.setAttribute("value",`${data.stats[num].base_stat}`)
} 

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
            pokeImg.setAttribute("src",`${data.sprites.other['official-artwork'].front_default}`)
            pokeName.innerText = data.name
            hpLab.innerText = 'HP: ' + data.stats[0].base_stat 
            addAttributes(pokeHp,data,0)
            attackLab.innerText = 'Attack: ' + data.stats[1].base_stat
            addAttributes(pokeAttack,data,1)
            defenseLab.innerText = 'Defense: ' + data.stats[2].base_stat
            addAttributes(pokeDefense,data,2)
            spAttackLab.innerText = 'Special Attack: ' + data.stats[3].base_stat
            addAttributes(pokeSpAttack,data,3)
            spDefenseLab.innerText = 'Speacial Defense: ' + data.stats[4].base_stat
            addAttributes(pokeSpDefense,data,4)
            speedLab.innerText = 'Speed: ' + data.stats[5].base_stat
            addAttributes(pokeSpeed,data,5)
        })
}


search.addEventListener('click',check)

