//? Funciones Tradicionales

function greetingNormal( saludo ) { return saludo; }
const greeting = saludo => saludo;


console.log( greetingNormal('adios'));
console.log(greeting('Hola'));

// #1 

const greetignReturn = () => {
    return 'greetingReturn';
}

const saludo = greetignReturn();
console.log( saludo );

// #2

const greetingWithName = name => {
    return `Hola ${name}`;
}

console.log(greetingWithName('Sergio'));

// #3

const greetingWithNameAndAge = (name, age) => {
    return `Mi nombre es, ${ name } y tengo la edad de ${ age }`;
};

console.log( greetingWithNameAndAge('Sergio', 26));

// #4
const greetingWithNameAndAgeCalculator = (name, bornYear, actuallyYear) => {
    const age = actuallyYear - bornYear;
    return `Hello my name is ${name} and I'm ${ age } years old`;
}

console.log(greetingWithNameAndAgeCalculator('Sergio', '1996', '2022'));


// #5

const calculatedAge = ( actuallyYear, bornYear ) => actuallyYear - bornYear;

const fullNameGenerator = ( name, surname ) => name + ' ' + surname;

const nameAndAgeGenerator = ( name, surname, actuallyYear, bornYear) => {
   const fullName = fullNameGenerator(name,surname);
   const age = calculatedAge(actuallyYear, bornYear);
   return `Hello my name is ${ fullName } and I'm ${age} years old`
}

console.log( calculatedAge() );
console.log( fullNameGenerator() );
console.log( nameAndAgeGenerator('Sergio','Fuentes',1939,2022) );

// #6
const paises = ['Italia','Francia','Cuba','Argentina'];
const peliculas = ['Titaic','Star Wars','Casino','Enemy'];

const iterateArray = ( array ) => {
    for (const element of array) {
        console.log(`Elemento del array: `, element );
    }
}

iterateArray( paises );