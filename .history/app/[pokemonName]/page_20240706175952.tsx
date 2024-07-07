import { getPokemon } from "@/libs/pokemonApi";
import Image from "next/image";
import Link from "next/link";



export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {

    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);
    const id = "000" + pokemonObject.id 

    return (
        <div className="container min-h-screen bg-slate-400 mx-auto">
            <Link href={'/'}>
                <h1>Back to home</h1>
            </Link>
            
            <div className="flex flex-col items-center justify-center gap-2">
                <div>
                    <h1 className="text-3xl font-bold">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
                    <h2>{pokemonObject.id}</h2>
                </div>
                <Image
                alt={''}
                src={pokemonObject.sprites.other['official-artwork'].front_default}
                width={200}
                height={200}/>
            </div>
        </div>
    )

}