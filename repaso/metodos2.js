
// Array Methods 2

//  Find -> Encuentra la primera coincidencia y termina

const foodList = [
    {
        id: 1,
        name: '🥦',
        kcal: 10,
    },
    {
        id: 1,
        name: '🍔',
        kcal: 10,
    },
    {
        id: 1,
        name: '',
        kcal: 10,
    }
];
const isBurguer = element => element.name === '🍔';

let burguerFind1 = foodList.find( food => food.name === '🥦');
let burguerFind2 = foodList.filter( food => food.name === '🥦');
let burguerFind3 = foodList.some( food => food.name === '🥦');
let burguerFind4 = foodList.every( isBurguer);

console.log( burguerFind1 );

const basiFoodList = [
    {
        id: 1,
        name: '🥦',
        recipes: []
    },
    {
        id: 2,
        name: '🍔',
    },
    {
        id: 3,
        name: '🥩',
    },
];


const food = {
    name: {
        spanish: 'zanahoria',
        english: 'carrot',
    },
    tuberculo: ['patata', 'cebolla'],
};

let { name } = food;
console.log( nombre, name)