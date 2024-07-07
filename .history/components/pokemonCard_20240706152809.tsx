import { PokemonDetail } from "@/libs/pokemonApi";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
    name: string;
}

export async function PokemonCard({ name }: PokemonCardProps) {
    // Ensure PokemonDetail expects a string (name), not an object with a number
    const pokemonData = await PokemonDetail({ name });
    
    // Ensure PokemonData contains the expected structure
    const { sprites } = pokemonData;
    
    return (
        <Link
          href={`/${name}`}
          className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          key={`${name}Card`} >

          <h2 className={`text-2xl font-semibold`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
          <Image
            src={sprites.other['official-artwork'].front_default}
            alt={name}
            width={200}
            height={200}
          />
        </Link>
    );
}
