import React from 'react'

const PokemonDetails = ({params} : {params: pokemon}) => {
    const {pokemon} = params;
    const pokemonDetail = await PokemonDetails(pokemon)
  return (
    <div>
        <h1>Pokemon Details</h1>
    </div>
  )
}

export default PokemonDetails