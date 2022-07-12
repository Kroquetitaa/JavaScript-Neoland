// Condicionales

// mono-hilo -> Solo tiene un hilo de ejecucion
// multi-hilo -> Limita la orden

let age = 16;
let ageAvengers = 16;

if( age >= 18){
    console.log('Mayor de edad');
}

if( ageAvengers >= 18){
    console.log('Welcome to Avengers');
} else {
    console.log('Vete a jugar con Spider-man');
}

let score = 9;

if( score >= 9){
    console.log('Tienes un sobresaliente');
}else if( score >= 7){
    console.log('Tienes un notable');
}else if( score == 6){
    console.log('Tienes un bien');
}else if( score == 5){
    console.log('Tienes un suficiente');
}else {
    console.log('SUSPENSO');
}

// Condicion ternaria

let scoreTer = 8;

let result = scoreTer >= 5 ? 'Aprobado' : 'Suspenso';

console.log( result );