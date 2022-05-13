export async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {mode: 'cors'})
    return await response.json();
}