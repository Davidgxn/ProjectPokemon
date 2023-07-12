const searchInput = document.getElementById("searchInput") as HTMLInputElement
const searchForm = document.getElementById("searchForm") as HTMLFormElement

searchInput.addEventListener("submit", handleSearchSubmint)

function handleSearchSubmint(event: Event) {
    event.preventDefault()
    const inputValue = searchInput.value;
    console.log(inputValue)
}