import { getPokemon } from "@/libs/pokemonApi";



export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {
    // Object destructuring
    const { pokemonName  = params;
    
    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject);

    return (
        <>
         

        </>
    )

}