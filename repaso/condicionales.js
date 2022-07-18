// Condicional tradicional

const age = 16;

if( age >= 18){
    console.log('1.Eres mayor de edad');
} else {
    console.log('1.Eres menor de edad');
}

if( age >= 1 && age <= 17){
    console.log('2.Eres menor de edad')
} else {
    console.log('2.Eres mayor de edad');
}
// Condicional ternario

age >= 18 ? console.log('1.Eres mayor de edad') : console.log('1.Eres menor de edad');
// age >= 18 ? '1.Eres mayor de edad' : '1.No eres mayor de edad';

( age >= 1 && age <= 17) ? console.log('2.Eres menor de edad') : console.log('2.Eres menor de edad');
// ( age >= 1 && age <= 17) ? '2.Eres menor de edad' : '2.Eres menor de edad';