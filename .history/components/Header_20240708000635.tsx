import React from 'react'

export default function Header() {
  return (
    <div className='container mx-auto'>
        <div>
            <div>
                <h1>POKEDEX</h1>
            </div>
            <div>
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