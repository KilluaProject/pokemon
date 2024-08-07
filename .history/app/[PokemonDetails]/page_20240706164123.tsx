import { getPokemon } from "@/libs/pokemonApi";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
    name: string;
}

export async function PokemonCard({ name }: PokemonCardProps) {
    try {
        const pokemonData = await getPokemon(name);
        const { sprites } = pokemonData;

        return (
            <Link
                href={`/${name}`}
                className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                key={`${name}Card`}>

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
    } catch (error) {
        console.error(`Error fetching Pokémon ${name}:`, error.message);
        // Handle error state in your UI (e.g., display an error message)
        return (
            <div>
                Error loading Pokémon {name}
            </div>
        );
    }
}
