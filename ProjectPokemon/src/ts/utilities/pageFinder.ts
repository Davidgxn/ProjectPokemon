import {render, clear} from "../../react/main";
const $buttonFullDown: HTMLElement = <HTMLElement>document.getElementById("button-fulldown")
const $buttonDown: HTMLElement = <HTMLElement>document.getElementById("button-down")
const $buttonUp: HTMLElement = <HTMLElement>document.getElementById("button-up")
const $buttonFullUp: HTMLElement = <HTMLElement>document.getElementById("button-fullup")
const $page: HTMLElement = <HTMLElement>document.getElementById("pagina")
const $pokeBox: HTMLElement = <HTMLElement> document.getElementById("poke-box")

$buttonFullDown.onclick = () => {
    $page.textContent = "1"
    render()
    clear()
}

$buttonDown.onclick = () => {
    let pagina: number = parseInt(<string>$page.textContent)
    if (pagina != 1) {
        pagina = pagina - 1
        $page.textContent = pagina.toString()
        render()
        clear()
    } 
}

$buttonUp.onclick = () => {
    let pagina: number = parseInt(<string>$page.textContent)
    if (pagina != 41) {
        pagina = pagina + 1
        $page.textContent = pagina.toString()
        render()
        clear()
    } 
}

$buttonFullUp.onclick = () => {
    $page.textContent = "41"
    render()
    clear()
}