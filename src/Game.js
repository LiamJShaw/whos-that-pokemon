import { getRandomPokemon } from './pokeAPI';

import { changeDisplayedPokemon, increasePokemonSize, revealPokemon, 
         setGuessBoxValue, enableKeyboard, disableKeyboard } from './UI.js';

let currentPokemonName;

let turnCounter = 0;

function generatePokemon() {

    const pokemon = getRandomPokemon();

    pokemon.then(function(response) {

        if (response) {
            currentPokemonName = response.name;

            changeDisplayedPokemon(response.sprites.front_default);
        }
    });
}

export const checkGuess = (guess) => {

    if (guess === currentPokemonName) {
        return true;
    }

    return false;
}


export const newGame = () => {
    // Set turnCounter to 0;
    turnCounter = 0;

    // Generate new random pokemon
    generatePokemon();

    enableKeyboard();
}

export const game = (guess) => {

    if (turnCounter < 5) {

        turnCounter++;
        increasePokemonSize(turnCounter);

        if (checkGuess(guess)) {
            revealPokemon();
            increasePokemonSize();
            disableKeyboard();
            return;
        }

        if (turnCounter == 5) {
            // Show full size Pokemon
            revealPokemon();
            increasePokemonSize();
            
            // Change guessBox to be real value
            setGuessBoxValue(currentPokemonName);

            disableKeyboard();

            return;
        }
    }
}

// Next turn
    // Increase size of sprite
    // increment turn counter


// Stop taking user input