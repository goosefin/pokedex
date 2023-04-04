let pokeName = document.querySelector('#poke-name')
let search = document.querySelector('#search')
let pokeInfo = document.querySelector('#poke-info')

let check = () => {
    //console.log(pokeName.value)
    //console.log('https://pokeapi.co/api/v2/pokemon/'+pokeName.value+'/')
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokeName.value+'/')
        .then((response) => response.json())
        .then((data) => {
            pokeInfo.innerText = data.id
        })
}

search.addEventListener('click',check)