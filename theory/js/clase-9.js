
// let number = 12;
// let name = 'Alberto';
// let listNames = ['Daniel','Nuria','Sergio'];

// for - palabra reservada - Inicializa nuestro bucle
// elemento iterador + condicion + cambio en elemento iterador
// Declarar mi iterador - i / index
// condicion - i / index < que el elemento iterable
// Cambio de index - aumentamos nuestro iterador en +1
// { accion }
// accion es el numero de veces que se lanza una funcionalidad por cada vez que pasa

// for( let i = 0; i < listNames.length ; i++){
//     console.log(listNames[i]);
// }

// let numberToRun = 27;
// for( let i = 0; i <= numberToRun; i++){
//     console.log(i);
// }

// for( let i = 27; i >= 0; i--){
//     console.log( i );
// }

//-----------------------------//

// let consumerList = [
//     {
//         name: 'Nuria',
//         gender: "female",
//     },
//     {
//         name: 'Sergio',
//         gender: 'male',
//     },
//     {
//         name: 'Lizzy',
//         gender: 'female',
//     },
//     {
//         name: 'Ramon',
//         gender: 'male',
//     },
//     {
//         name: 'Vanessa',
//         gender: 'female',
//     },
// ];

// for(let i = 0; i < consumerList.length; i++){
//     if( consumerList[i].gender === 'female'){
//         console.log(consumerList[i].name, 'Enhorabuena tienes un descuento');
//     } else {
//         console.log(consumerList[i].name, 'No tienes un descuento');
//     }
// }

//----------------------//
// let numberRandom = 20;

// for( let i = 0; i < numberRandom; i++){
//     console.log('Llego al 20', i);
// }

//------------------------//

let studentList = [
    {
        name: 'Sergio',
        lenguajes: ['Js','Java','HTML','CSS'],
    },
    {
        name: 'Cristina',
        lenguajes: ['HTML','CSS'],
    },
    {
        name: 'Ramon',
        lenguajes: ['HTML'],
    }
];

let listLanguajes = [];

for( let i = 0; i < studentList.length; i++ ){
    for( let j = 00; j < studentList[i].lenguajes.length; j++){
        if( listLanguajes.includes( studentList[i].lenguajes[j])){
            console.log('Repetido');
        }else {
            listLanguajes.push( studentList[i].lenguajes[j])
        }
    }
}

console.log( listLanguajes );