import './styles.css';
import logo from './img/logo.png';

import { getRandomPokemon } from './pokeAPI';

let randomPokemonName;

function checkGuess(guess) {

    console.log(randomPokemonName);

    if (guess === randomPokemonName) {
        console.log("Correct!");
        return true;
    }

    console.log("Incorrect!");
    return false;
}

// Get container
const container = document.querySelector("#container")

// Title
const title = new Image();
title.classList.add("title");
// title.textContent = "Who's that Pokemon?!";
title.src = logo;

container.append(title);


// Pokemon image
const pokemonSprite = document.createElement("img");
pokemonSprite.classList.add("pokemon-image");

// Hide the sprite
pokemonSprite.classList.add("hidden");

container.append(pokemonSprite);

const pokemon = getRandomPokemon();

pokemon.then(function(response) {

    if (response) {
        pokemonSprite.src = response.sprites.front_default;

        randomPokemonName = response.name;

    }
});

// Guess input box
const guessBox = document.createElement("input");
guessBox.type = "text";
guessBox.classList.add("guess-box");

container.append(guessBox);

// Game

function revealPokemon() {
    pokemonSprite.classList.remove("hidden");
}

function updateGuessBox(guess) {
    guessBox.value = guess;
}

function game(guess) {
    if (checkGuess(guess)) {
        revealPokemon();
    }
}

// Keyboard
const keyboard = document.querySelector(".keyboard");
keyboard.addEventListener("click", handleMouseClick);

function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) {
        pressKey(e.target.dataset.key);
        return;
    }

    if (e.target.matches("[data-enter]")) {
        //submit guess
        game(guessBox.value);
    }

    if (e.target.matches("[data-delete]")) {
        // backspace
        deleteChar(guessBox.value);
    }
}

function pressKey(key) {
    guessBox.value += key;
}

function deleteChar(string) {
    updateGuessBox(string.substring(0, string.length-1));
}