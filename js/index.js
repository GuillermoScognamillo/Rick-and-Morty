import { formateo } from "./fomat.js";

const $cardTemplate = document.querySelector(".cards-template");

let characters = [];

/* funcion para traer los datos de los personajes */

const getCharacters = async() =>{
    try{
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");

        if (respuesta.status === 200){
        const data = await respuesta.json();
        console.log(data);
        characters = data.results;
        console.log(characters);
        }
        else{
            throw new Error("No se pudieron traer los datos");
        }
    }
    catch(error){
        console.log(error);
    };
}

const cardMaker = (arr) => {
    return arr.map(personaje => {
        return `
            <div class="card">
                <div class="card-image" style="background-image: url(${personaje.image});"></div>
                <div class="card-info">
                    <h2 class="card-title">${personaje.name}</h2>
                    <p>Especie: ${formateo.especie(personaje.species)}</p>
                    <p class="card-status">Status: ${formateo.status(personaje.status)}</p>
                </div>
            </div>
        `
    })
} 

const renderCards = () => {
    const cards = cardMaker(characters);
    $cardTemplate.innerHTML = cards.join("");
}

const init = () => {
    getCharacters()
        .then(renderCards);
}

init();

