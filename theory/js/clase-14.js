

const batman = {
    nombre: 'Bruce',
    apellidos: 'Wayne',
    localizacion: 'Gotham',
    profesion: 'Multimillonario',
};

for (const keys in batman) {
    console.log(`key: ${keys}`);
    console.log(`Informacion del objeto: ${batman[keys]}`);
}

const characters = [
    'a',
    'a',
    'a',
    'a',
    'a',
];
// forin - arrays - devuelve los indices
for (const key in characters) {
    console.log('FORIN', key);
}
// forof - arrays - devuelve cada valor
for (const key in characters) {
    console.log('FOROF', key);
}
