import { PokemonDetail } from '@/libs/pokemonApi';
import React from 'react'



export default async function PokemonDetail({params} : {params : {pokemonName : string}}) {
  const {pokemonName} = params;
  const pokemonObject = await PokemonDetail(pokemonName)
  console.log(pokemonObject);
  
  
    return (
    <div>PokemonDetail</div>
  )
}
