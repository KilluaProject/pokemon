import { PokemonGrid } from "@/components/PokemonGrid";

import {PokemonList } from "@/libs/pokemonApi";


export default async function Home() {
  const pokemonList = await PokemonList();

  
  return (
    <main className="container min-h-screen mx-auto">
      <div className="pt-10 max-w-2xl bg-slate-400"> 

        <PokemonGrid pokemonList={pokemonList}/>
      </div>
    </main>
  );
}
