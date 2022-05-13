import './styles.css';
import logo from './img/logo.png';

import { getPokemon } from './pokeAPI';

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


const pokemon = getPokemon("squirtle");

pokemon.then(function(response) {

    if (response) {
        pokemonSprite.src = response.sprites.front_shiny;
    }
});

// Guess input box
const guessBox = document.createElement("input");
guessBox.type = "text";
guessBox.classList.add("guess-box");
guessBox.placeholder = "Type your guess here"

container.append(guessBox);

guessBox.focus();

// Submit guess button
const submitGuessButton = document.createElement("button");
submitGuessButton.classList.add("submit-guess");
submitGuessButton.textContent = "Submit";


container.append(submitGuessButton);