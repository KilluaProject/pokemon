import { getPokemon } from "@/libs/pokemonApi";
import Image from "next/image";



export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {
    // Object destructuring
    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject);

    return (
        <div>
            <Image
            alt={''}
            src={pokemonObject.sprites.other['official-artwork'].front_default}
            width={50}
            height={50}/>
        </div>
    )

}