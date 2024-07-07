import React from 'react'

const PokemonDetails = ({params} : {params: pokemonName}) => {
    const {pokemonName} = params;
    const pokemonDetail = await PokemonDetails(pokemonName)
  return (
    <div>
        <h1>Pokemon Details</h1>
    </div>
  )
}

export default PokemonDetails