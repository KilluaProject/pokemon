const POKEMON_API = "https://pokeapi.co/api/v2/"


export async function PokemonList() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=152&offset=0")
    const data = await response.json()
    return data.results
}




export async function getPokemon(name: string) {
    const response = await fetch(`https://pokeapi.co/api/v2/${name}`);
    
    if (!response.ok) {
        throw new Error(`Error fetching Pokémon ${name}: ${response.status} ${response.statusText}`);
    }
    
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error parsing JSON for Pokémon ${name}`);
    }
}
