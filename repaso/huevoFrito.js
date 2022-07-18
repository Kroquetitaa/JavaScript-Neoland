

// Como hacer un huevo frito

// HUEVO - SARTEN - ACEITE - PLATO

//1. Comprar todo lo que necesito
//2. Calentar la sarten con el aceite
//3. Echar el huevo
//4. Servir el huevo frito en planto

// Supermercado

const huevo = '🥚';
const sarten = '🍳';
const aceite = '🧴';
const plato = '🍽️';

const comprar = ( ingrediente1, ingrediente2, utensilio, soporte ) => {
    if( ingrediente1 && ingrediente2 && utensilio && soporte ){
        calentar( ingrediente1, ingrediente2, utensilio, soporte)
    } else{
        console.log('Vete a hacer la compra');
    }   
}

const calentar = ( ingrediente1, ingrediente2, utensilio, soporte ) => {
    if( ingrediente1 && utensilio && soporte){
        cocinar(ingrediente1, soporte);
    } else {
        console.log('Te has olvidado de uno de los elementos para calentar la sarten');
    }
}

const cocinar = (ingrediente, soporte) => {
    if( ingrediente && soporte ){
        servir( ingrediente, soporte);
    } else {
        console.log('No puedo cocinar');
    }
}

const servir = (soporte, ingrediente) => {
    if( ingrediente && soporte){
        console.log('Aqui tienes tu comida ->', ingrediente, soporte);
    } else {
        console.log('Vete a cuba');
    }
}

comprar(huevo, sarten, aceite, plato);