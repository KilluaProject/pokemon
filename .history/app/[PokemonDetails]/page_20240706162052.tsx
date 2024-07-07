import React from 'react'

export async default function PokemonDetail({params} : {params : {pokemon:string}}) {
  const {pokemon} = params;
  const pokemonDetails = await PokemonDetail(pokemon)
  
    return (
    <div>PokemonDetail</div>
  )
}
