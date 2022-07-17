const foodlist = [
    {
        name: 'cheeseCake',
        ingredients: ['cheese','egg','sugar'],
        isHealthy: false,
        kcal: 400
    },
    {
        name: 'Milanesas',
        ingredients: ['carne','huevo','pan'],
        isHealthy: false,
        kcal: 350
    },
    {
        name: 'Humus',
        ingredients: ['garbanzo','ajo','aove'],
        isHealthy: true,
        kcal: 200
    },
    {
        name: 'Hallaca',
        ingredients: ['harina de maiz','guiso de res y cerdo','vegetales'],
        isHealthy: false,
        kcal: 2000
    },
    {
        name: 'Ropa vieja',
        ingredients: ['carne','salsa de tomate','vegetales'],
        isHealthy: false,
        kcal: 1000
    },
    {
        name: 'Pizza',
        ingredients: ['harina','salsa de tomate','queso','aove','agua','levadura'],
        isHealthy: false,
        kcal: 1500
    },
    {
        name: 'Ramen',
        ingredients: ['fideos','nori','queso','cerdo','caldo','naruto'],
        isHealthy: true,
        kcal: 700
    },
    {
        name: 'Cus-cus',
        ingredients: ['pollo','verduras','semola','cerdo','caldo'],
        isHealthy: true,
        kcal: 300
    },
    {
        name: 'Pollo Chuco',
        ingredients: ['pollo','aove','platano','repollo','tomate'],
        isHealthy: false,
        kcal: 900
    },
    {
        name: 'Cocido Madrileño',
        ingredients: ['garbanzos','callos','chorizo'],
        isHealthy: false,
        kcal: 1400
    },
];

const insertFood = elementHtml => {
    document.querySelector('#foodBlock').innerHTML += elementHtml;
}

const createHTML = element => {
    return `
    <div>
    <h1> Name: ${element.name} </h1>
    <p> Ingredientes: ${element.ingredients}</p>
    <p> ${element.isHealthy ? 'Es sano' : 'No es sano'}</p>
    <p> Kcal: ${element.kcal}</p>
    </div>
    `;
}


const runList = list => {
    list.forEach( element => {
        insertFood( createHTML(element))
    });
}

runList( foodlist );