import React from 'react'

export default function Header() {
  return (
    <div className='w-screen px-[50px] mx-auto bg-red-400 drop-shadow py-5 sticky top-0 z-50 text-white'>
        <div className='flex justify-between items-center'>
            <div className=''>
                <h1 className='text-xl md:text-4xl font-bold'>POKEDEX</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex gap-4 items-center justify-center'>
                    <li>Home</li>
                    <li>Pokedex</li>
                    <li>Setting</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}
