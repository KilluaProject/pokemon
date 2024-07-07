import { getPokemon } from "@/libs/pokemonApi";



export default async function PokemonPage({ params }) {
    // Object destructuring
    const { pokemonName } = params;
    
    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject);

    return (
        <>
         <h1>{pokemonObject.name}</h1>

        </>
    )

}