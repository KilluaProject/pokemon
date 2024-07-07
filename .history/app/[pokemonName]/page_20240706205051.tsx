import { getPokemon } from '@/libs/pokemonApi';
import React from 'react'

export default async function PokemonPage({params} : {params : string}) {
    const {pokemonName} = params;
    const pokemonObjct = await getPokemon(pokemonName)
    console.log(pokemonObjct);
    
  return (
    <div>test</div>
  )
}
