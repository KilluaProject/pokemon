import { getPokemon } from "@/libs/pokemonApi";



export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {
    // Object destructuring
    const { pokemonName } = params;
    // pikachu
    // get the API data for pikachu
    const pokemonObject = await getPokemon(pokemonName);

    console.log(pokemonObject);

    return (
        <>
            <h1 className="text-4xl text-bold pt-4">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            
            <h3>Weight: {pokemonObject.weight}</h3>
            <div className="flex-col">
                {pokemonObject.stats.map( (statObject : any) => {
                    const statName = statObject.stat.name;
                    const statValue = statObject.base_stat;

                    return (
                        <div className="flex items-stretch" style={{width: "500px"}} key={statName}>
                            <h3 className="p-3 w-2/4">{statName}: {statValue}</h3>
                        </div>
                    )
                })}
            </div>
        </>
    )

}