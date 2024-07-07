import { PokemonList } from "@/libs/pokemonApi";
import Image from "next/image";

export default function Home() {
  const pokemonList = await PokemonList()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
