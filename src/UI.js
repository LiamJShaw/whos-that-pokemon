import logo from './img/logo.png';

import { game } from './Game';

// Get container
const container = document.querySelector("#container")

export const setupUI = () => {
    // Title
    const title = new Image();
    title.classList.add("title");
    // title.textContent = "Who's that Pokemon?!";
    title.src = logo;

    container.append(title);


    // Pokemon image
    const pokemonSprite = document.createElement("img");
    pokemonSprite.classList.add("pokemon-image");
    pokemonSprite.style.width = "10%";

    // Hide the sprite
    pokemonSprite.classList.add("hidden");

    container.append(pokemonSprite);


    // Guess input box
    const guessBox = document.createElement("input");
    guessBox.type = "text";
    guessBox.classList.add("guess-box");

    container.append(guessBox);
}

export const changeDisplayedPokemon = (src) => {
    const pokemonSprite = document.querySelector(".pokemon-image");

    pokemonSprite.src = src;
}

export const increasePokemonSize = (turn) => {

    const pokemonSprite = document.querySelector(".pokemon-image");

    switch(turn) {

        case 1:
            pokemonSprite.style.width = "20%";
            break;

        case 2:
            pokemonSprite.style.width = "35%";
            break;

        case 3:
            pokemonSprite.style.width = "50%";
            break;

        case 4:
            pokemonSprite.style.width = "70%";
            break;

        default:
            pokemonSprite.style.width = "100%";
            break;
    }
}

export const revealPokemon = () => {
    const pokemonSprite = document.querySelector(".pokemon-image");
    pokemonSprite.classList.remove("hidden");
}

function getGuessBox() {
    return document.querySelector(".guess-box");
}

export const setGuessBoxValue = (value) => {
    getGuessBox().value = value;
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
        game(getGuessBox().value);
    }

    if (e.target.matches("[data-delete]")) {
        // backspace
        deleteChar(getGuessBox().value);
    }
}

function pressKey(key) {
    getGuessBox().value += key;
}

function updateGuessBox(guess) {
    getGuessBox().value = guess;
}

function deleteChar(string) {
    updateGuessBox(string.substring(0, string.length-1));
}