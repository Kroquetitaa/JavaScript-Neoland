// Ambito global - scope Global
let pokemon = 'Charmander';

// Ambito local - scope Local
const showPokemon = () => {
    let pokemon = 'Pikachu';
    console.log( pokemon );
};

showPokemon();