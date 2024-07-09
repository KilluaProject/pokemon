import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
    name: string;
    image: string;
   
}

export function PokemonCard({ name, image }: PokemonCardProps) {
  

  const getPokemonDetails = async() => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    cosnr data = await res.json()
    return
    
}

    return (

      <div>

        <Link
          
          href={name}
          className="border gap-1 px-5 py-5 rounded-sm flex flex-col items-center justify-center"
          key={name} >

          <h2 className={`text-lg font-semibold`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
          <Image
          key={''}
            className=""
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${image}.png`}
            alt={name}
            width={150}
            height={150}
          />

        </Link>
      </div>
    );
}
