"use client"
import { PokemonCard } from "./pokemonCard";
import { useState } from "react";

// <PokemonGrid pokemonList={data}/>

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    const [ searchText, setSearchText ] = useState("");

    console.log(pokemonList);
    // filter the text
    // {name: "pikachu", url:""}
    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    // save the filtered array of objects
    const filteredPokemonList = searchFilter(pokemonList);

    // show the filtered array to user

    return (
        <>
       

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            {filteredPokemonList.map((pokemon : any) => {
                return (
                    <PokemonCard data={pokemon.data} name={pokemon.name} key={pokemon.name + "Card"}/>
                )
            })}
        </div>
        </>
    )
}