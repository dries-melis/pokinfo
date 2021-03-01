const fetch = require('node-fetch');

const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
    const data = await res.json();
    console.log(data);
}
fetchPokemon();