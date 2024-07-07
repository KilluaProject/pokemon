const POKEMON_API = "https://pokeapi.co/api/v2/"


export async function PokemonList() {
    const response = await fetch(POKEMON_API + "pokemon")
    const data = await response.json()
    return data
}


export async function PokemonDetail({name} : {name:string}) {
    const res = await fetch(POKEMON_API + "pokemon/" + name)
    const data = await res.json()
    return data
   }