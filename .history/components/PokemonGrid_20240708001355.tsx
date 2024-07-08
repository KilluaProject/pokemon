import { PokemonCard } from "./pokemonCard";
import { useState } from "react";

interface PokemonGridProps {
    pokemonList: any[];
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
    const [searchText, setSearchText] = useState("");
    const [loadData, setLoadData] = useState(20);
    const [loading, setLoading] = useState(false);
    const [selectedType, setSelectedType] = useState("All");

    const searchFilter = (pokemonList: any[]) => {
        return pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (selectedType === "All" || pokemon.types.includes(selectedType))
        );
    };

    const filteredPokemonList = searchFilter(pokemonList);

    const loadMoreItems = () => {
        setLoading(true);
        setTimeout(() => {
            setLoadData(loadData + 20);
            setLoading(false);
        }, 1000);
    };

    const handleTypeChange = (type: string) => {
        setSelectedType(type);
        setLoadData(20); // Reset load data when type changes
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
                    <div className="relative">
                        <select
                            className="border px-4 py-3 rounded-md max-w-full w-[25%]"
                            value={selectedType}
                            onChange={(e) => handleTypeChange(e.target.value)}
                        >
                            <option value="All">All Types</option>
                            <option value="Grass">Grass</option>
                            <option value="Fire">Fire</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {filteredPokemonList.slice(0, loadData).map((pokemon: any) => {
                    const id = pokemon.url.split("/")[6];
                    return (
                        <PokemonCard image={id} name={pokemon.name} key={pokemon.name + "Card"} />
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