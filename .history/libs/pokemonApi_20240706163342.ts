const POKEMON_API = "https://pokeapi.co/api/v2/"


export async function PokemonList() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=152&offset=0")
    const data = await response.json()
    return data.results
}




export async function getPokemon(name: string) {
    const response = await fetch(`https://pokeapi.co/api/v2/${name}`);
    const data = await response.json();
    return data
    console.log(data);
    
}
