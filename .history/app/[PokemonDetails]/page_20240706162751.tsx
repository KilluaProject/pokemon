import { getPokemon } from '@/libs/pokemonApi';
import React from 'react'



export default async function Pokemon({params} : {params : {pokemonName : string}}) {
  const {pokemonName} = params;
  const pokemonObject = await getPokemon(pokemonName)
  console.log(pokemonObject);
  
  
    return (
    <div>PokemonDetail</div>
  )
}
