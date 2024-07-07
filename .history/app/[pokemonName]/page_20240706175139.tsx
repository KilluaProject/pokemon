import { getPokemon } from "@/libs/pokemonApi";
import Image from "next/image";



export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {
    // Object destructuring
    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject);

    return (
        <div>
            <h1 >{pokemonObject.name}</h1>
            <Image
            alt={''}
            src={pokemonObject.sprites.other['official-artwork'].front_default}
            width={200}
            height={200}/>
        </div>
    )

}