
let empleadoList = ['nombre1','nombre2','nombre3'];

const empleados = list => {
    list.forEach( (name, index) => {
        console.log(`El nombres es: ${name} y su indice es ${index}`);
    });
}

empleados( empleadoList );