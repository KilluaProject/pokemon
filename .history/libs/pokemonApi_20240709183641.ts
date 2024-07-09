const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function PokemonList() {
    const response = await fetch(`${POKEMON_API}pokemon?limit=10000&offset=0`);
    const data = await response.json();
    const detailedPokemonData = await Promise.all(
        data.results.map(async (pokemon:any) => {
            const pokemonDetailResponse = await fetch(pokemon.url);
            const pokemonDetailData = await pokemonDetailResponse.json();
            return {
                name: pokemon.name,
                url: pokemon.url,
                types: pokemonDetailData.types.map((typeInfo:any) => typeInfo.type.name),
            };
        })
    );

    return detailedPokemonData;
}





export async function getPokemon(name: string) {
    // pokemon/ditto
    const response = await fetch(POKEMON_API + "pokemon/" + name);
    const data = await response.json();
    return data;
}

export async function getPokemonSpecies(id: string) {
    // pokemon/species
    const response = await fetch(POKEMON_API + "pokemon-species/" + id);
    const data = await response.json();
    return data;
    
}