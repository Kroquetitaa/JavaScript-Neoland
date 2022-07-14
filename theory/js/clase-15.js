let numbers = [1,2,3,4,5,6,7,8,9];

// pop -> Elimina el ultimo elemento de nuestro array
numbers.pop();
console.log( numbers );

// push -> añade al final un nuevo elemento
numbers.push(10) 
console.log( numbers );

// reverse -> cambia el orden 
numbers.reverse();
console.log( numbers );

// shift -> Elimina el primer elemento de un array
numbers.shift();
console.log( numbers );

// sort -> Ordenar elementos
numbers.sort();
console.log( numbers );

// --------------- //

let numberToSort = [10,20,50,40,30,80];
numberToSort.sort();
console.log( numberToSort );

// ------------------- //

let numberToSort2 = ['Alberto','Abel','Bartolo','Bertran','Sergio','Samuel','Marcos'];
numberToSort2.sort();
console.log( numberToSort2 );

// Splice - > trocea los elementos desde el indice hasta el numero que le indiques el segundo tambien empieza contando desde 1
// ejemplo si elijes el elemento 2 primero el siguiente elemento empiezas desde el 2 contando pero 1,2,3,4 los que quieras
let numberToSplice = [11,12,13,14,15,16,17,18,19,20];
numberToSplice.splice(2,3);
console.log( numberToSplice );

// Spice // Tambien se usa para reemplazar

let numberToSplice2 = [11,12,13,14,15,16,17,18,19,20];
numberToSplice2.splice(2,3, 'Hola neoland','Esto es un bootcamp');
console.log( numberToSplice2 );

// unshift -> Agregar uno o mas elementos al inicio del array
let numbersToUnshift = [3,4,5,6,7,8,9,10];
numbersToUnshift.unshift(1,2);
console.log( numbersToUnshift );


// METODOS QUE NO MODIFICAN EL ARRAY

// Concat -> Concatenar valores pero sin modificar los arrays originales
let numbersMod = [1,2,3,4];
let numbersMod2 = [5,6,7];
let numberConcat = numbersMod.concat(numbersMod2);
console.log( numberConcat );

// join -> unificar los elementos de nuestro array
let namesToJoin = ['Alberto','Abel','Bartolo','Beltran','Antonio','Alicia'];
let joinedNames = namesToJoin.join('*');
console.log( joinedNames );

// slice -> splice pero lo guardas dentro de un nuevo array
let namesToSlice = ['Alberto','Abel','Bartolo','Beltran','Antonio','Alicia'];
let sliceNames = namesToSlice.slice(2);
console.log( sliceNames );

// toString() - de un array te lo devuelve en un string
let stringNumbers = [1,2,3,4,5];
let numbersToString = stringNumbers.toString();
console.log(numbersToString );

// Localizar valores concretos d eun array
// indexOf -> devuelve el primer elemento que coincide
let modeSelector = ['who','Fentanyl','Tom','Dy'];
let whoIndex = modeSelector.indexOf('who');
console.log(whoIndex);

// LastIndexof ->  el indice o posicion de la ultima coincidencia
let nodeSelector = ['who','fentanyl','tom','dy'];
let lasIndext = nodeSelector.lastIndexOf('dy');

// includes -> comprueba si exite el elemento
const listFilms = ['harry potter','harry potter2','harry potter3'];
console.log( listFilms.includes('harry potter'));


