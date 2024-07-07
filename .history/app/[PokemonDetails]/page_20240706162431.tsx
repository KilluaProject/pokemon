import { PokemonDetail } from '@/libs/pokemonApi';
import React from 'react'



export default async function PokemonDetail({params} : {params : {pokemonName : string}}) {
  const {pokemonName} = params;
  const pokemonDetails = await PokemonDetail(pokemonName)
  console.log(pokemonDetails);
  
  
    return (
    <div>PokemonDetail</div>
  )
}
