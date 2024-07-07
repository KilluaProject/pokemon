import { getPokemon } from '@/libs/pokemonApi';
import React from 'react'

export default function PokemonPage({params} : {params : string}) {
    const {pokemonName} = params;
    const pokemonObjct = await getPokemon(pokemonName)
  return (
    <div>test</div>
  )
}
