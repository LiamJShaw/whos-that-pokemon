import './styles.css';

import { getPokemon } from './pokeAPI';

// Get container
const container = document.querySelector("#container")

// Title
const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Who's that Pokemon?!";

container.append(title);


// Pokemon image
const pokemonSprite = document.createElement("img");
pokemonSprite.classList.add("pokemon-image");

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

container.append(guessBox);