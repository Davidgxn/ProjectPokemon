import { listPokemon, pokemon} from "../../interface/interface"
import { PokemonApp } from "../../react/pokemonApp"

const fragment: Node = document.createDocumentFragment();
const $pokeBox: HTMLElement = <HTMLElement> document.getElementById("poke-box")
const $pagina: HTMLElement = <HTMLElement> document.getElementById("pagina")
let listaPokemon : string[][] = []

export async function fetchPokemon() {
    listaPokemon = []
  
    let urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000"

    let respuesta = await fetch(urlPokemon);
    let res: listPokemon = await respuesta.json();
  
    for (const pokemon of res.results) {
  
      let urlPartida: string[] = pokemon.url.split("/");
      let numeroPokemon: number = parseInt(urlPartida[6]);
  
      if (!(numeroPokemon > 9999)) {
        let respuestaPokemon = await fetch(pokemon.url);
        let resPokemon: pokemon = await respuestaPokemon.json();
        if (resPokemon.sprites.front_default != null) {
          listaPokemon.push([pokemon.name, resPokemon.sprites.front_default]);
        }
      }
    }
}

export async function getPokemon() {
    await fetchPokemon()
    console.log(listaPokemon)
    return listaPokemon
}