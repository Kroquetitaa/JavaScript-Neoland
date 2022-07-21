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