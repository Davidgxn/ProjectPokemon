import { listPokemon, pokemon} from "../../interface/interface"

const fragment: Node = document.createDocumentFragment();
const $pokeBox: HTMLElement = <HTMLElement> document.getElementById("poke-box")
const $pagina: HTMLElement = <HTMLElement> document.getElementById("pagina")

export default function fetchPokemon() {
    while ($pokeBox.firstChild) {
        $pokeBox.removeChild($pokeBox.firstChild); // Elimina el primer hijo del elemento <div> repetidamente
    }
    let urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/?offset="
    let numero: number = parseInt(<string>$pagina.textContent) - 1;
    const pokemon: number = 25;
    numero = numero * pokemon;
    urlPokemon += numero+"&limit="+pokemon
    fetch(urlPokemon)
        .then(res => res.json())
        .then((res: listPokemon) => {
            res.results.forEach((pokemon) => {
                let urlPartida: string[] = pokemon.url.split("/")
                let numeroPokemon: number = parseInt(urlPartida[6])
                if (!(numeroPokemon > 9999)) {
                    let nombrePokemon: string = pokemon.name[0].toUpperCase()
                    nombrePokemon += pokemon.name.substring(1)
                    const $div: HTMLElement = document.createElement("div"),
                        $img: HTMLElement = document.createElement("img"),
                        $button: HTMLElement = document.createElement("button"),
                        $namePokemon: Node = document.createTextNode(nombrePokemon),
                        $divCard: HTMLElement = document.createElement("div")
            
                    $img.setAttribute("alt", pokemon.name)
                    $img.setAttribute("title", pokemon.name)
            
                    fetch(pokemon.url)
                        .then(res => res.json())
                        .then((res: pokemon) => {
                            $img.setAttribute("src", res.sprites.front_default)
                        })
            
                    $div.setAttribute("class", "card m-3 shadow")
                    $div.setAttribute("id", pokemon.name)
                    $img.setAttribute("class", "card-img-top")
                    $divCard.setAttribute("class", "card-body d-flex justify-content-center")
                    $button.setAttribute("class", "btn btn-outline-dark")
            
                    $button.appendChild($namePokemon)
                    $divCard.appendChild($button)
                    $div.appendChild($img)
                    $div.appendChild($divCard)
                    fragment.appendChild($div)
                    $pokeBox.appendChild(fragment)
                }
            })
        })
}

export function fetchPokemonFilter(urlPokemons: string[]): void {
    while ($pokeBox.firstChild) {
        $pokeBox.removeChild($pokeBox.firstChild); // Elimina el primer hijo del elemento <div> repetidamente
    }
    urlPokemons.forEach((pokemon) => {
        fetch(pokemon)
        .then(res => res.json())
        .then((res) => {
                let nombrePokemon: string = res.name[0].toUpperCase()
                nombrePokemon += res.name.substring(1)
                const $div: HTMLElement = document.createElement("div"),
                    $img: HTMLElement = document.createElement("img"),
                    $button: HTMLElement = document.createElement("button"),
                    $namePokemon: Node = document.createTextNode(nombrePokemon),
                    $divCard: HTMLElement = document.createElement("div")
    
                $img.setAttribute("alt", res.name)
                $img.setAttribute("title", res.name)
                $img.setAttribute("src", res.sprites.front_default)
    
                $div.setAttribute("class", "card m-3 shadow")
                $div.setAttribute("id", res.name)
                $img.setAttribute("class", "card-img-top")
                $divCard.setAttribute("class", "card-body d-flex justify-content-center")
                $button.setAttribute("class", "btn btn-outline-dark")
    
                $button.appendChild($namePokemon)
                $divCard.appendChild($button)
                $div.appendChild($img)
                $div.appendChild($divCard)
                fragment.appendChild($div)
                $pokeBox.appendChild(fragment)
        })
    })
}