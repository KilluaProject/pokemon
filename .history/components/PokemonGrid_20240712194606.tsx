// components/PokemonGrid.tsx

"use client";

import { useState } from "react";
import { PokemonCard } from "./PokemonCard";

interface Pokemon {
    id: number;
    name: string;
    url: string;
    types: string[];
    image: string;
}

interface PokemonGridProps {
    pokemonList: Pokemon[];
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
    const [searchText, setSearchText] = useState("");
    const [loadData, setLoadData] = useState(20);
    const [loading, setLoading] = useState(false);
    const [selectedType, setSelectedType] = useState("");

    const searchFilter = (pokemonList: Pokemon[]) => {
        return pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const typeFilter = (pokemonList: Pokemon[]) => {
        if (!selectedType) return pokemonList;
        return pokemonList.filter((pokemon) =>
            pokemon.types.includes(selectedType)
        );
    };

    const filteredPokemonList = typeFilter(searchFilter(pokemonList));

    const loadMoreItems = () => {
        setLoading(true);
        setTimeout(() => {
            setLoadData(loadData + 20);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="relative flex flex-col gap-3">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Search Your Favorite Pokemon</h1>
                <div className="flex gap-2 items-center">
                    <input
                        className="border px-4 py-3 rounded-md max-w-full w-[25%]"
                        type="text"
                        value={searchText}
                        placeholder="Enter a Pokemon name"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <select
                        className="border px-4 py-3 rounded-md"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option value="">All Types</option>
                        {/* You can fetch and map Pokémon types here */}
                        {/* Example: */}
                        {/* {types.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))} */}
                    </select>
                </div>
            </div>
            <div className="grid gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {filteredPokemonList.slice(0, loadData).map((pokemon) => {
                    return (
                        <PokemonCard
                            key={pokemon.id}
                            id={pokemon.id}
                            image={pokemon.image}
                            name={pokemon.name}
                            types={pokemon.types}
                        />
                    );
                })}
            </div>
            {loadData < filteredPokemonList.length && (
                <div className="flex justify-center mt-4 mb-4">
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <div className="loader border-t-4 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
                        </div>
                    ) : (
                        <button
                            onClick={loadMoreItems}
                            className="px-4 py-2 border rounded-md bg-blue-500 text-white"
                        >
                            Load More
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
