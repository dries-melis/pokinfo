var data;

function sendRequest()
{
    console.log("sending request");

    
    $.ajax('https://pokeapi.co/api/v2/pokemon?limit=10000000000',   // request url
    {
        success: function (pokemon, status, xhr) {// success callback function
            getPokemonData(pokemon.results);
            
    }

    });


}
