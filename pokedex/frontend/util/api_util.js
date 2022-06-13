export const fetchAllPokemon = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/pokemon`
    })
}

export const fetchSinglePokemon = (id) => {
    return $.ajax({
        url: `/api/pokemon/${id}`,
        method: 'GET'
    })
}

export const createPokemon = (pokemon) => {
    return $.ajax({
        url: "/api/pokemon/",
        method: "POST",
        data: {pokemon}
    })
}