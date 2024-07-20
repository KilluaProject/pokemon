"use client"

import { PokemonCard } from "./pokemonCard";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";

interface PokemonGridProps {
    pokemonList: any;
    types: string[];
}

export function PokemonGrid({ pokemonList, types }: PokemonGridProps) {
    const [searchText, setSearchText] = useState("");
    const [selectedType, setSelectedType] = useState("All Pokemon");
    const [loadData, setLoadData] = useState(20);
    const [loading, setLoading] = useState(false);

    const searchFilter = (pokemonList: any[]) => {
        return pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const typeFilter = (pokemonList: any[]) => {
        if (selectedType === "All Pokemon") return pokemonList;
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
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold">Search Your Favorite Pokemon</h1>
                <div className="grid grid-cols-2 gap-2 items-center">
                    <input
                        className="border px-4 py-2 rounded-md max-w-full w-full"
                        type="text"
                        value={searchText}
                        placeholder="Enter a Pokemon name"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Select value={selectedType} onValueChange={(value) => setSelectedType(value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Type Pokemon" className="placeholder:text-opacity-20 " />
                        </SelectTrigger>
                        <SelectContent className="">
                            <SelectItem className="p-4" value="All Pokemon">
                                All Pokemon
                            </SelectItem>
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
                       
                        <Button className="bg-blue-500 hover:bg-blue-700" onClick={loadMoreItems}>
                            Load More
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
}
