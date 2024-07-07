import { getPokemon } from "@/libs/pokemonApi";



export default async function PokemonPage({ name } : { name: { pokemonName: string } }) {
    // Object destructuring
    const pokemonName  = name;
    
    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject);

    return (
        <>
         

        </>
    )

}