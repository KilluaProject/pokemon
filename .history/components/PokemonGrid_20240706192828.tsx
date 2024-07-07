"use client"

import { PokemonCard } from "./pokemonCard";
import { useState } from "react";

// <PokemonGrid pokemonList={data}/>

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    
        const [searchText, setSearchText] = useState("");
        
        const searchFilter = (pokemonList: any[]) => {
        return pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
        };
        const filteredPokemonList = searchFilter(pokemonList);

        const [loadMore, setLoadMore] = useState

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Search Your Favorite Pokemon</h1>
                <input className="border px-4 py-3 rounded-md max-w-xs "
                type="text"
                value={searchText}
                placeholder="Enter a Pokemon name"
                onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className=" grid gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {filteredPokemonList.map((pokemon : any) => {
                    const id = pokemon.url.split('/')[6]
                    return (
                        <PokemonCard image={id} name={pokemon.name} key={pokemon.name + "Card"}/>
                    )
                })}
            </div>
        </div>
        
    )
}