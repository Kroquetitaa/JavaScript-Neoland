

const superheroes = [
    {name: 'Spiderman', age: 25, location: 'Queen', image: 'image-1'},
    {name: 'Iron-Man', age: 35, location: 'New York', image: 'image-2'},
];
const villanos = [
    {name: 'Venom', age: 38, location: 'New York', image: 'image-3'},
    {name: 'Duende Verde', age: 60, location: 'New York', image: 'image-4'}
];

const myContainer = document.querySelector('#superheroes');
const myContainer2 = document.querySelector('#villanos');

const iteratorCharacters = (array, container) => {
    for (const element of array) {
        generateHTML( element, container );
    }
}

const generateHTML = element => {
    return  `
    <figure>
    <h2>${element.name}</h2>
    <img src="${element.image} alt="${element.name} width="200px">
    <p>${ element.age }</p>
    <p>${ element.location }</p>
    </figure>
    `;
}

const printToDocument= (container, array) => {
    container.innerHTML += iteratorCharacters( array );
}

printToDocument(myContainer, superheroes);
printToDocument(myContainer2, superheroes);