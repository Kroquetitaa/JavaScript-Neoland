// Fragmento de codigo que se reutiliza en mi aplicacion

function greeting( name, isStudent){
    if ( isStudent ){
        console.log('Bienvenido', + name);
    } else {
        console.log('Tu no eres estudiante');
    }
}

greeting('Lizzy', true);
greeting('Lukman', true);
greeting('Daniel', true);
greeting('Pedro', false);
greeting('Alberto', true);


function listedItems(list){
    for(let i = 0; i < list.lenght; i++){
        console.log('Listado', list[index]);
    }
}

let room = ['Pedro','Daniel','Vanesa'];
let colors = ['Blue','Red','Orange'];

listedItems( room );
listedItems( colors );

// Funciones con param por defecto
function pokemonAttack( name, attack="Ataque Arena"){
    console.log(`${name} usa ${attack}`)
}

pokemonAttack('Pikachu', 'Impact Trueno');
pokemonAttack('Charmander', 'Ascuas');
pokemonAttack('Ratata');

// Funciones callback por param -> function que llama a otra function
function pokemonAttackDefault( name, attack= defaultAttack()){
    console.log(`${name} usa ${attack}`);
}

function defaultAttack(){
    return 'Ataque arena';
}

pokemonAttackDefault('Pikachu', 'Impact Trueno');
pokemonAttackDefault('Charmander', 'Ascuas');
pokemonAttackDefault('Ratata');

//--------------------//

function calculadora( numA, numB, action ){
    if( action == 'multiplicar'){
        multiplicar(numA, numB)
    } else if( action == 'dividir'){
        dividir(numA, numB);
    } else if( action == 'restar'){
        restar(numA, numB)
    } else {
        sumar(numA, numB)
    }
}

function multiplicar(numA, numB){
    return numA * numB;
}

function sumar(numA, numB){
    return numA + numB;
}

function restar(numA, numB){
    return numA - numB;
}

function dividir(numA, numB){
    return numA / numB;
}


calculadora()