import React from 'react';
import { getPokemon, PokemonList } from '@/libs/pokemonApi'; // Assume getAllPokemon fetches data for all Pokemon
import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Progress } from '@/components/ui/progress';

interface PokemonDetailProps {
  params: {
    pokemonName: string;
  };
}

interface StatType {
  type: {
    name: keyof typeof COLOR_TYPES;
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
};

export default async function PokemonPage({ params }: PokemonDetailProps) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);
 // const speciesData = await getPokemonSpecies(pokemonName);
  

  // Fetch all Pokemon data to find the maximum stat values
  const allPokemon = await PokemonList();

  const maxStats = allPokemon.reduce(
    (max, pokemon) => {
      pokemon.stats.forEach((stat: any) => {
        const statName = stat.stat.name;
        if (!max[statName] || stat.base_stat > max[statName]) {
          max[statName] = stat.base_stat;
        }
      });
      return max;
    },
    {} as Record<string, number>
  );

  
  const formatPokemonNumber = (number: string): string => {
    return `#${String(number).padStart(4, '0')}`;
  };

  return (
    <div className="relative container pt-5 mx-auto flex flex-col gap-10 pb-10">
      <Link className="lg:absolute lg:top-20 lg:z-50 hidden " href={'/'}>
        <button className="flex items-center gap-3 bg-blue-600 py-2 px-4 rounded-sm text-white">
          <span>
            <FaLongArrowAltLeft />
          </span>
          Back
        </button>
      </Link>
      <div className="bg-gray-100 rounded-sm flex justify-center items-center max-w-md mx-auto py-3 px-6 gap-4 ">
        <h1 className="text-4xl font-semibold text-center">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h1>
        <h2 className="text-center font-medium text-xl">
          {formatPokemonNumber(pokemonObject.id || '')}
        </h2>
      </div>

      <div className="flex mx-auto justify-center items-start w-full gap-10">
        <div className="border w-[40%] border-slate-200 p-4 rounded-md flex flex-col items-center justify-center bg-gray-100 h-[30rem] ">
          <Image
            src={pokemonObject.sprites.other['official-artwork'].front_default}
            alt={pokemonObject.name}
            objectFit=""
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="flex flex-col gap-3">
         
          <h2 className="text-xl font-bold">Type Pokemon</h2>

          <div className="flex gap-3">
            {pokemonObject.types.map((statType: StatType) => {
              const type = statType.type.name;
              return (
                <div key={type} className="flex">
                  <span
                    style={{ backgroundColor: COLOR_TYPES[type] }}
                    className="px-5 py-2 rounded-md text-white uppercase"
                  >
                    {type}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <h1 className="text-xl font-bold mb-1">Status Pokemon</h1>
      {pokemonObject.stats.map((statObject: any) => {
        const statName = statObject.stat.name;
        const statValue = statObject.base_stat;
        const maxStatValue = maxStats[statName];
        const statPercentage = Math.round((statValue / maxStatValue) * 100);

        return (
          <div key={statName}>
            <h3>
              {statName}: {statValue} ({statPercentage}%)
            </h3>
            <Progress value={statPercentage} />
          </div>
        );
      })}
    </div>
  );
}
