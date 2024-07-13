
import { PokemonGrid } from "@/components/PokemonGrid";
import { PokemonList } from "@/libs/pokemonApi";

export default async function Home() {
    const pokemonList = await PokemonList();
    const res = await fetch('https://pokeapi.co/api/v2/type');
    const typesData = await res.json();
    const types = typesData.results.map((type: any) => type.name);
    console.log(types);
    

    return (
        <main className="container mx-auto">
            <div className="pt-10 max-w-full">
                <PokemonGrid pokemonList={pokemonList} types={types} />
            </div>
        </main>
    );
}
