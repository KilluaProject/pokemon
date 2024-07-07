"use client"

import { PokemonCard } from "./pokemonCard";
import { useState } from "react";

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20); // Set items per page

    const searchFilter = (pokemonList: any[]) => {
        return pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const filteredPokemonList = searchFilter(pokemonList);

    // Calculate total pages
    const totalPages = Math.ceil(filteredPokemonList.length / itemsPerPage);

    // Get current page items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPokemonList.slice(indexOfFirstItem, indexOfLastItem);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Search Your Favorite Pokemon</h1>
                <input
                    className="border px-4 py-3 rounded-md max-w-xs"
                    type="text"
                    value={searchText}
                    placeholder="Enter a Pokemon name"
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        setCurrentPage(1); // Reset to first page on search
                    }}
                />
            </div>
            <div className="grid gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {currentItems.map((pokemon: any) => {
                    const id = pokemon.url.split('/')[6];
                    return (
                        <PokemonCard image={id} name={pokemon.name} key={pokemon.name + "Card"} />
                    );
                })}
            </div>
            <div className="flex justify-center mt-4 overflow-hidden">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={(e) => handleClick(e, pageNumber)}
                        className={`px-4 py-2 mx-1 border rounded-md ${currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-white text-black"}`}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
}
