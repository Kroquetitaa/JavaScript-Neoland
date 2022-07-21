// Array Methods mas usados

// forEach --> Iterar lista desordenadas

let matriz = [];

matriz.forEach( (elementoIterado, index, array) => {

});

// Map --> Itera una lista y genera una nueva con las condiciones marcadas
// map --> para modificar y transformar NO RECORRER!!!

let newMatriz = matriz.map( elementoIterado => {
    if (elementoIterado === 'Alberto') return elementoIterado
}); 

// Funciones
const funcion = () => {

}

// Puedes retornar valores - despues del return no se ejecuta nada
const returnfunction = () => {
    return 'hola a todos';
    console.log('hola');
}

// puedes tener parametros -> elementos de entrada y pueden tener el nombre que queramos
const paramFunction = param => {
    return param + 5;
}

// Para ejecutar una funcion  debemos invocarla
returnfunction();
paramFunction();

// las funciones con return se suelen guardar los valores en variables

let greeting = returnfunction();

let sumaDecinco = paramFunction(25);


const entrenador = (orden) => {
    console.log('entrenador', orden);
    central( orden );
}
const portero = (orden) => {
    console.log('entrenador', orden);
    central( orden );
}
const central = (orden) => {
    console.log('entrenador', orden);
    medioIzquierda( orden );
}
const medioIzquierda = (orden) => {
    console.log('entrenador', orden);
    medioDerecha( orden );
}
const medioDerecha = (orden) => {
    console.log('entrenador', orden);
    delantero( orden )
}
const delantero = (orden) => {
    console.log('entrenador', orden);
}
portero();