"use client"

import { PokemonList } from "@/libs/pokemonApi";
import { PokemonCard } from "./pokemonCard";
import { useState } from "react";

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    
    const [searchText, setSearchText] = useState("");
    const [sortCriteria, setSortCriteria] = useState("name"); // default sort by name
    
    const searchFilter = (pokemonList: any[]) => {
        return pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const sortPokemonList = (pokemonList: any[]) => {
        return pokemonList.sort((a, b) => {
            if (sortCriteria === "name") {
                return a.name.localeCompare(b.name);
            } else if (sortCriteria === "id") {
                const idA = parseInt(a.url.split('/')[6]);
                const idB = parseInt(b.url.split('/')[6]);
                return idA - idB;
            }
            return 0;
        });
    };

    const filteredPokemonList = sortPokemonList(searchFilter(pokemonList));

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Search Your Favorite Pokemon</h1>
                <input className="border px-4 py-3 rounded-md max-w-xs"
                    type="text"
                    value={searchText}
                    placeholder="Enter a Pokemon name"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <select
                    className="border px-4 py-3 rounded-md max-w-xs mt-3"
                    value={sortCriteria}
                    onChange={(e) => setSortCriteria(e.target.value)}
                >
                    <option value="name">Sort by Name</option>
                    <option value="id">Sort by ID</option>
                </select>
            </div>
            <div className="grid gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {filteredPokemonList.map((pokemon : any) => {
                    const id = pokemon.url.split('/')[6];
                    return (
                        <PokemonCard image={id} name={pokemon.name} key={pokemon.name + "Card"} />
                    )
                })}
            </div>
        </div>
    )
}
