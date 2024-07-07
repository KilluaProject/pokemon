import PokemonGrid from "@/components/PokemonGrid";
import { PokemonList } from "@/libs/pokemonApi";
import Image from "next/image";

export default async function Home() {
  const pokemonList = await PokemonList();
  console.log(pokemonList);
  
  return (
    <PokemonGrid pokemonList={pokemonList}/>
  );
}
