import { PokemonGrid } from "@/components/PokemonGrid";

import {PokemonList } from "@/libs/pokemonApi";


export default async function Home() {
  const pokemonList = await PokemonList();

  
  return (
    <main className="container min-h-screen mx-auto">

      <PokemonGrid pokemonList={pokemonList}/>
    </main>
  );
}
