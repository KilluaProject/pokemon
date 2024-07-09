const POKEMON_API = "https://pokeapi.co/api/v2/"

export async function getPokemon(item: any) {
    const response = await fetch(item.url);
    const data = await response.json();
    console.log({ data });
    return data;
  }
  
  export async function PokemonList() {
    let pokemonList = [];
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0"
    );
    const responseDataList = await response.json();
    pokemonList = responseDataList?.results;
    console.log({ pokemonList });
  
    return await Promise.all(
      pokemonList?.map(async (item: any) => {
        return await getPokemon(item);
      })
    );
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
