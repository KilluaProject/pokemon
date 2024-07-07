import React from 'react'

export default function PokemonGrid({pokemonList} : {pokemonList : any}) {
  return (
    <div>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            {filteredPokemonList.map((pokemon : any) => {
                return (
                    <PokemonCard name={pokemon.name} key={pokemon.name + "Card"}/>
                )
            })}
        </div>
    </div>
  )
}
