import { getPokemon } from "@/libs/pokemonApi";

import Link from "next/link";



export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {

    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);

    const formatPokemonNumber = (number:string):string => {
        return `#${String(number).padStart(4,"0")}`
    }

    return (
        <div className="container min-h-screen mx-auto bg-slate-400">
            <Link href={'/'}>
                <h1>{pokemonObject.name}</h1>
            </Link>

           
            
           
        </div>
    )

}