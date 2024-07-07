import React from 'react'
import { getPokemon } from '@/libs/pokemonApi'
import Image from 'next/image';

export const COLOR_TYPES = {

  normal:'#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
}

export default async function PokemonPage({params}: {params:string}) {

  const {pokemonName} = params;
  const pokemonObject =  await getPokemon(pokemonName)
  const {sprites} = pokemonObject


  return (
    <div className="pt-36 container mx-auto">

      <h1 className="text-center text-4xl font-bold">{pokemonName}</h1>
      <div className="flex items-center justify-start gap-4 mt-10">
          <div className="border p-4 rounded-lg drop-shadow-lg flex flex-col items-center justify-center">
            <Image 
            src={sprites.other[`official-artwork`].front_default}
            width={400}
            height={400}
            alt={pokemonName}
            />
            <p>Berat: {pokemonObject.weight} lbs</p>
            <div className="flex-col items-center justify-center gap-2">

            </div>
          </div>
         

      </div>
    </div>
  )
}