"use client";

import { PokemonCard } from "./pokemonCard";
import { useState, useEffect } from "react";

interface PokemonGridProps {
    pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
    const [searchText, setSearchText] = useState("");
    const [loadData, setLoadData] = useState(20);
    const [loading, setLoading] = useState(false);
    const [detailedPokemonList, setDetailedPokemonList] = useState<any[]>([]);
    const [fetching, setFetching] = useState(true); // State to track the data fetching status

    useEffect(() => {
        const fetchDetailedPokemon = async () => {
            try {
                const detailedData = await Promise.all(
                    pokemonList.map(async (pokemon: any) => {
                        try {
                            const response = await fetch(pokemon.url);
                            if (!response.ok) {
                                throw new Error(`Failed to fetch data for ${pokemon.name}`);
                            }
                            const text = await response.text();
                            try {
                                const data = JSON.parse(text);
                                return { ...pokemon, types: data.types };
                            } catch (jsonError) {
                                console.error(`Failed to parse JSON for ${pokemon.name}:`, text);
                                throw jsonError;
                            }
                        } catch (fetchError) {
                            console.error(`Error fetching data for ${pokemon.name}:`, fetchError);
                            throw fetchError;
                        }
                    })
                );
                setDetailedPokemonList(detailedData);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            } finally {
                setFetching(false); // Set fetching to false after data is fetched or if there's an error
            }
        };
        fetchDetailedPokemon();
    }, [pokemonList]);

    const searchFilter = (pokemonList: any[]) => {
        return pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const filteredPokemonList = searchFilter(detailedPokemonList);

    const loadMoreItems = () => {
        setLoading(true);
        setTimeout(() => {
            setLoadData(loadData + 20);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="flex flex-col gap-3">
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
                </div>
            </div>
            {fetching ? (
                <div className="flex justify-center items-center h-64">
                    <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
                    <p className="ml-2">Loading Pokémon data...</p>
                </div>
            ) : (
                <>
                    <div className="grid gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                        {filteredPokemonList.slice(0, loadData).map((pokemon: any) => {
                            const images = pokemon.url.split('/')[6];

                            return (
                                <PokemonCard
                                    image={images}
                                    name={pokemon.name}
                                    key={pokemon.name + "Card"}
                                    types={pokemon.types}
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
                </>
            )}
        </div>
    );
}
