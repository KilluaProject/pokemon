import { PokemonGrid } from "@/components/PokemonGrid";

import {PokemonList } from "@/libs/pokemonApi";


export default async function Home() {
  const pokemonList = await PokemonList();
  
  return (
    <main className="container mx-auto">
      <div className="pt-10 max-w-full"> 
        <PokemonGrid pokemonList={pokemonList}/>
      </div>
    </main>
  );
}
