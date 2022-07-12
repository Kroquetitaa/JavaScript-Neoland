
let txt = typeof "texto";
let num = typeof 10;
let bool = typeof true;

console.log( txt, num, bool );

// string - cadena de texto
let room = 'web dev';
// number - numeros 1 2 3 ...
let numberRoom = 2;
// booleans - true or false
let isDevelop = true;
// null - objeto nullo - su contenido esta roto
let keyboard = null;
// undefined - no asignar valor
let mouse = undefined;
// undefined porque no tiene valor
let cable;
// object - caja con compartimentos separados y ordenados
let person = {
    name: 'Alberto',
    surname: 'Rivera',
    age: 34,
}
// acceder a valores del objeto - nombre del objeto
let listObjects = ['Coche','juguete', 35, person, false];
// Array dentro de otro array
let listObjectsWithObjects = ['Alberto', listObjects ];