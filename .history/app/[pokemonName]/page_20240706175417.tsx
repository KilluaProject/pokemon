import { getPokemon } from "@/libs/pokemonApi";
import Image from "next/image";



export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {

    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            <Image
            alt={''}
            src={pokemonObject.sprites.other['official-artwork'].front_default}
            width={200}
            height={200}/>
        </div>
    )

}