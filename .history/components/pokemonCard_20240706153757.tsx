import { PokemonDetail } from "@/libs/pokemonApi";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
    name: string;
    url:string
   
}

export async function PokemonCard({ name, url }: PokemonCardProps) {
    // Ensure PokemonDetail expects a string (name), not an object with a number
    
    return (
        <Link
          href={`/${name}`}
          className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          key={`${name}Card`} >

          <h2 className={`text-2xl font-semibold`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${1}+1.png`}
            alt={name}
            width={200}
            height={200}
          />
        </Link>
    );
}
