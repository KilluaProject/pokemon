import React from 'react'

export default async function PokemonDetail({params} : {params : {pokemonName : string}}) {
  const {pokemon} = params;
  const pokemonDetails = await PokemonDetail(pokemon)
  
    return (
    <div>PokemonDetail</div>
  )
}
