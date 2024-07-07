"use client"
import { useEffect, useState } from "react"
import PokemonGrid from "@/components/PokemonGrid"



export default function Home() {

  const [pokemonList, setPokemonList] = useState([])
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject({results} : {results: any})  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setPokemonList( currentList => [...currentList, data])
        await pokemonList.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }
  
  useEffect(() => {
    getAllPokemons()
   }, [])

  return (
    <div className=" container mx-auto">

      <PokemonGrid pokemonList={pokemonList}/>
      <div className="py-10 flex gap-2 flex justify-center items-center">

      <button className="text-slate-100 rounded-lg px-3 py-1 bg-slate-900" onClick={() => getAllPokemons()}>Load More</button>
     
   
      </div>
    </div>

  )
}