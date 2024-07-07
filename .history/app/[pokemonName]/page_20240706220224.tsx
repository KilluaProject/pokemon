import React from 'react'
import { getPokemon } from '@/libs/pokemonApi'
import Image from 'next/image';

interface PokemonDetailProps {
    params: {
        pokemonName: string;
    };
}

interface StatType {
    type: {
        name: keyof typeof COLOR_TYPES
    };
}

const COLOR_TYPES = {
  normal: '#A8A77A',
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

export default async function PokemonPage({ params }: PokemonDetailProps) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);
  
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <h1 className="text-center text-4xl font-bold">{pokemonName}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 p-4 rounded-md flex flex-col items-center justify-center bg-slate-100 h-[40rem] ">
          <Image 
            src={pokemonObject.sprites.other['official-artwork'].front_default}
            alt={pokemonObject.name}
            objectFit='contain'
            width={350}
            height={350}
            
          />
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl'>{pokemonObject.name}</h1>
        
          <div className="flex flex-col gap-3">
          <h2>type</h2>
            {pokemonObject.types.map((statType: StatType) => {
              const type = statType.type.name;
              return (
                <div className='flex'>

                <span 
                  key={type}
                  style={{ backgroundColor: COLOR_TYPES[type] }}
                  className="px-5 py-2 rounded-md text-white uppercase"
                >
                  {type}
                </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
