import fetchPokemon from "../pokemon/fetch_pokemon";
const $buttonFullDown: HTMLElement = <HTMLElement>document.getElementById("button-fulldown")
const $buttonDown: HTMLElement = <HTMLElement>document.getElementById("button-down")
const $buttonUp: HTMLElement = <HTMLElement>document.getElementById("button-up")
const $buttonFullUp: HTMLElement = <HTMLElement>document.getElementById("button-fullup")
const $page: HTMLElement = <HTMLElement>document.getElementById("pagina")
const $pokeBox: HTMLElement = <HTMLElement> document.getElementById("poke-box")

$buttonFullDown.onclick = () => {
    $page.textContent = "1"
    fetchPokemon()
    clearBox()
}

$buttonDown.onclick = () => {
    let pagina: number = parseInt(<string>$page.textContent)
    if (pagina != 1) {
        pagina = pagina - 1
        $page.textContent = pagina.toString()
        fetchPokemon()
        clearBox()
    } 
}

$buttonUp.onclick = () => {
    let pagina: number = parseInt(<string>$page.textContent)
    if (pagina != 41) {
        pagina = pagina + 1
        $page.textContent = pagina.toString()
        fetchPokemon()
        clearBox()
    } 
}

$buttonFullUp.onclick = () => {
    $page.textContent = "41"
    fetchPokemon()
    clearBox()
}

function clearBox(): void {
    while ($pokeBox.firstChild) {
        $pokeBox.removeChild($pokeBox.firstChild)
    }
}