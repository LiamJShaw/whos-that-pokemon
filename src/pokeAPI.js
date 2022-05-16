export async function getPokemon(pokemon) {
    // Can provide a name or a dex number for `pokemon`
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {mode: 'cors'})
    return await response.json();
}

export const getRandomPokemon = () => {

    // Gen 1 only for now
    const randomID = Math.floor(Math.random() * 251);

    return getPokemon(randomID);
}