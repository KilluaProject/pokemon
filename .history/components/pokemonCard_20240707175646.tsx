import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
    name: string;
    image: string;
   
}

export function PokemonCard({ name, image }: PokemonCardProps) {  
    return (

      <div>

        <Link
          
          href={name}
          className="border gap-1 px-5 py-5 rounded-sm flex flex-col items-center justify-center"
          key={name} >

          <h2 className={`text-2xl font-semibold`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
          <Image
          key={''}
            className=""
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${image}.png`}
            alt={name}
            width={100}
            height={100}
          />

        </Link>
      </div>
    );
}