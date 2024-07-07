"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function PokemonGrid({ pokemonList} : {pokemonList : string}) {
  const [searchText, setSearchText] = useState("");
 
  const searchFilter = (pokemonList) => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <div className="flex flex-col pt-36">
      <div className="flex flex-col gap-3 mb-5">
        <h1 className="text-3xl font-bold">Search Your Favorite Pokemon</h1>
        <input className="border px-4 py-3 rounded-full max-w-xs "
          type="text"
          value={searchText}
          placeholder="Enter a Pokemon name"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="grid sm:grid-cols-4 gap-5">
        {filteredPokemonList.map((pokemon) => {
            return (
              
                <Link href={pokemon.name} className="flex flex-col items-center justify-center border p-4 rounded-lg " key={pokemon.name}>
                   

                        <h1>{pokemon.name}</h1>
                        <Image
                        width={200}
                        height={200}
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        alt={pokemon.name}/>
                    
                    
                </Link>
            )
            })}
      </div>
    </div> 
  );
}