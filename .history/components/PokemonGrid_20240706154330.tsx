
import { PokemonList } from "@/libs/pokemonApi";
import { PokemonCard } from "./pokemonCard";

// <PokemonGrid pokemonList={data}/>

interface PokemonGridProps {
    pokemonList: any
}

export async function PokemonGrid() {
    const pokemonList = await PokemonList()
    console.log(pokemonList);
    

    return (
        <>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            {pokemonList.map((pokemon : any) => {
             const id = pokemon.url.split('/')[6];
             return (
                <div className="grid border grid-cols-2">
                    <h1>{pokemon.name}</h1>
                </div>
             )
            })}
        </div>
        </>
    )
}