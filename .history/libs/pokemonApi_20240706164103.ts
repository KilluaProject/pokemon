


export async function PokemonList() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=152&offset=0")
    const data = await response.json()
    return data.results
}




const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemon(name: string) {
    const response = await fetch(`${POKEMON_API}pokemon/${name}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch Pokémon ${name}: ${response.status} ${response.statusText}`);
    }

    try {
        const data = await response.json();
        return data;
    } catch (error) {
        // If response.json() fails (e.g., due to non-JSON response), handle the error
        throw new Error(`Error parsing JSON for Pokémon ${name}: ${error.message}`);
    }
}

