import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
    name: string;
    image: string;
    types: string[];
    id: string;
}

const COLOR_TYPES : {[key: string]: string }  = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export function PokemonCard({ name,image, types,id }: PokemonCardProps) {

  const formatPokemonNumberId = (number:string): string =>{
    return `#${String(number).padStart(4,"0")}` 
  }

  
    return (
        <div>
            <Link
                href={name}
                className="border gap-1 px-5 py-5 rounded-sm flex flex-col items-center justify-center"
                key={name}
            >
                <h1 className="text-lg font-semibold">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </h1>
                <h2 className="text-sm">
                    {formatPokemonNumberId(id)}
                </h2>
                <Image
                    src={image}
                    alt={name}
                    width={150}
                    height={150}
                    priority
                />
                <div className="flex gap-2 m-auto">
                    {types.map((type) => (
                        <span
                            key={type}
                            className="px-4 py-1 rounded text-white text-xs"
                            style={{ backgroundColor: COLOR_TYPES[type] }}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </span>
                    ))}
                </div>
            </Link>
        </div>
    );
}
