import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  name: string;
  image: string;
  types: { slot: number; type: { name: string; url: string } }[];
}

export function PokemonCard({ name, image, types }: PokemonCardProps) {
  return (
    <div>
      <Link
        href={name}
        className="border gap-1 px-5 py-5 rounded-sm flex flex-col items-center justify-center"
        key={name}
      >
        <h2 className="text-lg font-semibold">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        <Image
          className=""
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${image}.png`}
          alt={name}
          width={150}
          height={150}
        />
        <div className="mt-2">
          {types.map((typeInfo) => (
            <span
              key={typeInfo.type.name}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {typeInfo.type.name.charAt(0).toUpperCase() +
                typeInfo.type.name.slice(1)}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
