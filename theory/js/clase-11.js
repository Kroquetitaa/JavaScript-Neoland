let alumnosList = ['Alberto','Lizzy','Marcos','Juan'];

const greetinFunction = ( list ) => {
    for (let index = 0; index < list.length; index++) {
        console.log(`Hola ${list[index]}`)
    }
}

greetinFunction( alumnosList );