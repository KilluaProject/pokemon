
import { PokemonCard } from "./pokemonCard";
import { useState } from "react";

// <PokemonGrid pokemonList={data}/>

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    

    return (
        <>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            {pokemonList.map((pokemon : any) => {
                return (
                    <PokemonCard image={pokemon.name} name={pokemon.name} key={pokemon.name + "Card"}/>
                )
            })}
        </div>
        </>
    )
}