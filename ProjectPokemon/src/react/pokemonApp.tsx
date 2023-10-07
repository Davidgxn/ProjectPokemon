import { PokemonCard } from "./pokemonCard"
import {getPokemon} from "../ts/pokemon/fetch_poke"

const $pagina: HTMLElement = document.getElementById("pagina") as HTMLElement

let listaPokemon : string[][] = await(getPokemon())

export function PokemonApp() {
    let pagina: number = parseInt($pagina.textContent as string) - 1;
    let tarjetas: JSX.Element[] = []
    for (let i : number = 0; i<25; i++) {
        tarjetas.push(<PokemonCard pokemonName={listaPokemon[(25*pagina)+i][0]} pokemonUrl={listaPokemon[(25*pagina)+i][1]} />)
    }
    return(
        <div className="row row-cols-6">
            {tarjetas}
        </div>
    )
}