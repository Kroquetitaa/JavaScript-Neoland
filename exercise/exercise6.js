
// Opcion - 1
 const arrayList = ['Alumno-1','Alumno-2','Alumno-3','Alumno-4','Alumno-5'];



//Opcion - 1.Simplificada
const arrayList2 = ['Alumno-1','Alumno-2','Alumno-3','Alumno-4','Alumno-5',];

const listFunction2 = (list, text= modifWords2()) => list.map( value => console.log( text, value));
const modifWords2 =( word = 'Neoland') => word;
listFunction2( arrayList );

// Opcion - 2

const arrayList3 = ['Alumno-1','Alumno-2','Alumno-3','Alumno-4','Alumno-5'];

const listFunction3 = () => {
    console.log(modifWords3(arrayList3));
}

const modifWords3 = (list, word = 'Neoland') => {
    for (const values of list) {
        console.log(word, values)
    }
};

listFunction3( arrayList );

// Opcion - 2.Simplificada

const arrayList4 = ['Alumno-1','Alumno-2','Alumno-3','Alumno-4','Alumno-5'];
const listFunction4 = () => console.log(modifWords3(arrayList3));
const modifWords4 = (list, word = 'Neoland') => list.map( value => console.log( word, value));

listFunction4( arrayList );

// Opcion - 3
const listedElements = list => {
    for( const element of list ){
        console.log(modifyElement(element));
    }
}

const modifyElement = (element) => {
    return `${element} Neoland`;
}

// Opcion - 3.Simplificada
const listedElements2 = list => list.map( value => console.log(modifyElement( value) ));
const modifyElement2 = element => `Neoland ${element}`;
listedElements2(arrayList);