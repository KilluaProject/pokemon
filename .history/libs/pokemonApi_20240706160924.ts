const POKEMON_API = "https://pokeapi.co/api/v2/"


export async function PokemonList() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=10")
    const data = await response.json()
    return data.results
}


export async function PokemonDetail({name} : {name:number}) {
    const res = await fetch(POKEMON_API + "pokemon/" + name)
    const data = await res.json()
    return data
   }