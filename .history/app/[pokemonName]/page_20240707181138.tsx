import React from 'react'
import { getPokemon } from '@/libs/pokemonApi'
import Image from 'next/image';
import { types } from 'util';

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
  const pokemonObject = await getPokemon(pokemonName)

  const formatPokemonNumber = (number:string): string =>{
    return `#${String(number).padStart(4,"0")}` 
  }
  
  return (
    <div className="container pt-[15px] mx-auto flex flex-col gap-10">
      <div className='bg-gray-100 rounded-sm flex justify-center items-center max-w-md mx-auto py-3 px-6  gap-4 '>
        <h1 className={`text-4xl font-semibold text-center`}>
              {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h1>
        <h2 className='text-center font-medium text-xl'>{formatPokemonNumber(pokemonObject.id || "")}</h2>
      </div>

      <div className="flex w-full gap-10">
        <div className="border w-[40%] border-slate-200 p-4 rounded-md flex flex-col items-center justify-center bg-gray-100 h-[40rem] ">
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
          <h2>type</h2>
          <div className="flex gap-3">
            {pokemonObject.types.map((statType: StatType) => {
              const type = statType.type.name;
              return (
                <div key={'id'} className=' flex'>

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
