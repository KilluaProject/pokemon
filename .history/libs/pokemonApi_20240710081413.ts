const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function PokemonList() {
    const response = await fetch(`${POKEMON_API}pokemon?limit=151&offset=0`);
    const data = await response.json();
    const detailedPokemonData = await Promise.all(
        data.results.map(async (pokemon:any) => {
            const pokemonDetailResponse = await fetch(pokemon.url);
            const pokemonDetailData = await pokemonDetailResponse.json();
            return {
                id : pokemonDetailData.id,
                name: pokemon.name,
                url: pokemon.url,
                types: pokemonDetailData.types.map((typeInfo:any) => typeInfo.type.name),
                image: pokemonDetailData.sprites.other['official-artwork'].front_default,
            };
        })
    );
   
    

    

    return detailedPokemonData;
}

export async function getPokemon(name: string) {
    
    const response = await fetch(POKEMON_API + "pokemon/" + name);
    const data = await response.json();
    return data;
}

export async function getPokemonSpecies(name: string) {
 
    const response = await fetch(POKEMON_API + "pokemon-species/" + name);
    const data = await response.json();
    return data;
    
}


export async function getAllPokemon(){

    const maxStats = getAllPokemon.reduce((max, pokemon) => {
      pokemon.stats.forEach(stat => {
        const statName = stat.stat.name;
        if (!max[statName] || stat.base_stat > max[statName]) {
          max[statName] = stat.base_stat;
        }
      });
      return maxStats;
    }, {});
}
// Find maximum stat values for each stat across all Pokemon
