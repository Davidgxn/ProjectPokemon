import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonApp } from './pokemonApp'

const $pokeBox: HTMLElement = document.getElementById("poke-box") as HTMLElement

const pokemonRoot = ReactDOM.createRoot($pokeBox)

render()

export function render() {
    
    pokemonRoot.render(
        <PokemonApp />
    )
}

export function clear() {
    pokemonRoot.unmount
}