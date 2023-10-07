export function PokemonCard({pokemonName, pokemonUrl}: {pokemonName: string, pokemonUrl: string}) {
    return(
        <div className="card m-3 shadow" id={pokemonName}>
            <img src={pokemonUrl} alt={pokemonUrl} className="card-img-top" />
            <div className="card-body d-flex justify-content-center">
                <button className="btn btn-outline-dark">{pokemonName}</button>
            </div>
        </div>
    )
}
