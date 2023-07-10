import { listPokemon, pokemon} from "../../interface/interface"

const fragment: Node = document.createDocumentFragment();
let $pokeBox: HTMLElement = <HTMLElement> document.getElementById("poke-box")

export default async function fetchPokemon() {
    let urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/"
    let result = await fetchData(urlPokemon);
    while (result != null && result != "https://pokeapi.co/api/v2/pokemon/?offset=1000&limit=20") {
        result = await fetchData(result);
    }
    if (result == "https://pokeapi.co/api/v2/pokemon/?offset=1000&limit=20") {
        result = "https://pokeapi.co/api/v2/pokemon/?offset=1000&limit=10"
        result = await fetchData(result);
    }
    $pokeBox.appendChild(fragment)
}


function mostrarPokemon(res: listPokemon): void {
    res.results.forEach((pokemon) => {
        if (pokemon.name == "deoxys-attack"){
            console.log(res)
        }
        const $div: HTMLElement = document.createElement("div"),
            $img: HTMLElement = document.createElement("img"),
            $button: HTMLElement = document.createElement("button"),
            $namePokemon: Node = document.createTextNode(pokemon.name),
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
    })
}

async function fetchData(url: string): Promise<any> {
    const res = await fetch(url)
    const data: listPokemon = await res.json();
    mostrarPokemon(data)
    return data.next
}