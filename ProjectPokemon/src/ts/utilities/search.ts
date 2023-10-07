import { listPokemon, pokemon} from "../../interface/interface";
import {fetchPokemonFilter} from "../pokemon/fetch_pokemon";
import fetchPokemon from "../pokemon/fetch_pokemon";

const searchInput = document.getElementById("searchInput") as HTMLInputElement
const searchButton = document.getElementById("searchButton") as HTMLFormElement

searchButton.addEventListener("click", handleButtonPress)
searchInput.addEventListener("keypress", handleSearchSubmint)

async function handleButtonPress(event: Event) {
    event.preventDefault()
    if (searchInput.value == "") {
        fetchPokemon()
    } else {
        let pokemones = await filterName()
        fetchPokemonFilter(pokemones)
    }
}

async function handleSearchSubmint(event: KeyboardEvent) {
    if (event.key == "Enter") {
        event.preventDefault()
        if (searchInput.value == "") {
            fetchPokemon()
        } else {
            let pokemones = await filterName()
            fetchPokemonFilter(pokemones)
        }
    }
}

async function filterName() {
    let url: string = "https://pokeapi.co/api/v2/pokemon?limit=100000"
    let name: string = <string>searchInput.value
    let listaPokemon: string[] = []
    let respuesta = await fetch(url)
    let res: listPokemon = await(respuesta.json())
    res.results.forEach((pokemon) => {
        let urlPartida: string[] = pokemon.url.split("/")
        let numeroPokemon: number = parseInt(urlPartida[6])
        if (pokemon.name.includes(name) && numeroPokemon < 9999){
            listaPokemon.push(pokemon.url)
        }
    })
    return listaPokemon
}