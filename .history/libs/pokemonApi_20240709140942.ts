const POKEMON_API = "https://pokeapi.co/api/v2/"


export async function PokemonList() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
    const data = await response.json()
    return data.results
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