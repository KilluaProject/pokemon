import React from 'react'
import { getPokemon } from '@/libs/pokemonApi'
import Image from 'next/image';


interface PokemonDetailProps {
    params: {
        pokemonName: string;
      };
}

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

export default async function PokemonPage({params} : PokemonDetailProps) {

  const {pokemonName} = params;
  const pokemonObject =  await getPokemon(pokemonName)
  
  return (
    <div className="container mx-auto">

      <h1 className="text-center text-4xl font-bold">{pokemonName}</h1>
      <div className="grid grid-cols-2 justify-start gap-4 mt-10">
          <div className="border p-4 rounded-lg drop-shadow-lg flex flex-col items-center justify-center">
            <Image 
            src={pokemonObject.sprites.other[`official-artwork`].front_default}
            width={400}
            height={400}
            alt={pokemonName}
            />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatem tenetur necessitatibus modi inventore harum, laboriosam quae! Totam quaerat voluptatum doloremque quod maxime asperiores itaque? Magnam assumenda atque pariatur quidem.</p>
          </div>


      </div>
    </div>
  )
}