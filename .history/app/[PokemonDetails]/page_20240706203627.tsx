import { getPokemon } from "@/libs/pokemonApi";
import Image from "next/image";
import Link from "next/link";
import { PokemonCard } from "@/components/pokemonCard";
import { PokemonImage } from "@/components/PokemonImage";



export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {

    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);

    const formatPokemonNumber = (number:string):string => {
        return `#${String(number).padStart(4,"0")}`
    }

    return (
        <div className="container min-h-screen mx-auto bg-slate-400">
            <Link href={'/'}>
                <h1>Back to home</h1>
            </Link>

            <div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex gap-5 font-medium items-end justify-center bg-gray-200 px-4 py-2 rounded-md">
                        <h1 className="text-3xl font-bold">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
                        <h2 className="text-2xl font-medium">{formatPokemonNumber(pokemonObject.id)}</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center bg-slate-500">
                <div className="m-4" style={{ position: "relative", width: '300px', height: '300px'}}>
                <PokemonImage 
                    image={pokemonObject.sprites.other['official-artwork'].front_default }
                    name={pokemonName}
                />
            </div>
                    </div>
            </div>
            
           
        </div>
    )

}