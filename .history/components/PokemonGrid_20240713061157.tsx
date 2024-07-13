"use client"

import { PokemonCard } from "./pokemonCard";
import { useState } from "react";
import { Select ,SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { SelectValue } from "@radix-ui/react-select";

interface PokemonGridProps {
    pokemonList: any;
    types: string[];
}


export function PokemonGrid({ pokemonList, types }: PokemonGridProps) {
    const [searchText, setSearchText] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [loadData, setLoadData] = useState(20);
    const [loading, setLoading] = useState(false);

    const searchFilter = (pokemonList: any[]) => {
        return pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const typeFilter = (pokemonList: any[]) => {
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
                        <option className="p-4" value="">All Types</option>
                        {types.map((type) => (
                            <option className="p-4" key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    <Select >
                       <SelectTrigger>
                            <SelectValue placeholder="Type Pokemon" className="placeholder:text-opacity-20"/>
                       </SelectTrigger>
                       <SelectContent>
                       {types.map((type) => (
                            <SelectItem className="p-4" key={type} value={type}>
                                {type}
                            </SelectItem>
                        ))}

                       </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {filteredPokemonList.slice(0, loadData).map((pokemon: any) => {
                    return (
                        <PokemonCard
                            id={pokemon.id}
                            image={pokemon.image}
                            name={pokemon.name}
                            types={pokemon.types}
                            key={pokemon.name + "Card"}
                        />
                    );
                })}
            </div>
            {loadData < filteredPokemonList.length && (
                <div key={pokemonList.id} className="flex justify-center mt-4 mb-4">
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
