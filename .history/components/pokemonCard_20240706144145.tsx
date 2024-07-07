
import { PokemonDetail } from "@/libs/pokemonApi"
import Image from "next/image"
import Link from "next/link"


// pikachu, -> localhost:3000/pikachu

interface PokemonCardProps {
    props: string

}

// <PokemonCard name="pikachu" />

export function PokemonCard({ props } : PokemonCardProps) {

    return (
        <Link href={data.name} className="border flex flex-col items-center justify-center p-4 rounded-lg">
        <h1 className="mb-3 text-black">{data.name}</h1>
     
          <Image
          width={200}
          height={200}
          alt={data.name}
          src={sprites.other[`official-artwork`].front_default}
          />
      
       </Link>
    )
}