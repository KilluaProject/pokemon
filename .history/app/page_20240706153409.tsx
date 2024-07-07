
import { PokemonGrid } from "@/components/PokemonGrid";
import { PokemonDetail, PokemonList } from "@/libs/pokemonApi";
import Image from "next/image";

export default async function Home() {
  const pokemonList = await PokemonList();
  const PokemonDetail = await PokemonDetail();

  
  return (
    <PokemonGrid/>
  );
}
