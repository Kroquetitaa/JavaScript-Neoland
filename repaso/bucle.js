

const alimentos = ['Lechuga','pan','galletas','cerveza','aceitunas'];
const numeros = [1,5,98,43];
const car = {
    marca: 'Ford',
    modelo: 'Fiesta',
    wheels: 4,
    door: 5,
}
const movies = [
    {
        title: 'Evil Dead',
        year: 1986,
        poster: 'imagen-1',
        director: {
            name: 'Sam Raimi',
            age: 78,
            location: 'Virginia',
        },
    },
    {
        title: 'Titanic',
        year: 1996,
        poster: 'imagen-2',
        director: 'James Cameron',
    },
];


// Bucle - alimentos
console.log('------------------------');
console.log('Alimentos');
console.log('------------------------');

for (let i = 0; i < alimentos.length; i++) {
    const alimento = alimentos[i];   
    console.log( `For: ${ alimento }` ); 
}

console.log('-----------------------');

alimentos.forEach( elements => {
    console.log( `ForEach: ${ elements }` )
});

console.log('------------------------');

for (const alimento of alimentos) {
    console.log(`ForOf: ${ alimento }`)
}
console.log('------------------------');
console.log('Numeros');
console.log('------------------------');
// Bucle - numeros

for( let i = 0; i < numeros.length; i++){
    console.log(`for: ${ numeros[i] }`);
}

console.log('--------------------------');

numeros.forEach( e => {
    console.log(`ForEach: ${ e }`)
});

console.log('--------------------------');

for (const numero of numeros) {
    console.log(`forof: ${numero}`);
}
console.log('------------------------');
console.log('peliculas');
console.log('------------------------');
// Bucle - numeros

// for( let i = 0; i < peliculas; i++){
//     console.log(`for: ${ i }`);
// }

console.log('--------------------------');

movies.forEach( (e,i) => {
    console.log(`ForEach: ${ e.title } ${i}`)
});

console.log('--------------------------');

// for (const numero of numeros) {
//     console.log(`forof: ${numero}`);
// }



console.log('------------------------');
console.log('Coches');
console.log('------------------------');
// Bucle - numeros

for (const key in car) {
    console.log(`Clave : ${key} - Valor ${car[key]} `);
}

const { marca, modelo, wheels, door } = car;

console.log(car['marca']);
console.log(car.marca);
console.log( `Marca: ${ marca }, \n Modelo: ${ modelo },\n Wheels: ${ wheels },\n Door: ${ door }` );


// Reto - Recorrer un array de objetos
console.log('-----------------------');
console.log('Ejercicio : Reto');
console.log('-----------------------');
for (const movie of movies) {
    for (const key in movie) {
        console.log(`La clave de movie: ${ key }, tiene el valor: ${movie[key]}`);
    }
}

for (const key in movies['director']) {
    console.log(`La clave de director: ${ key }, tiene el valor ${movies['director'][key]} `);
}