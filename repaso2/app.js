
const asd = [
    {
        name: 'a',
        avantar: 'a',
        email: 'a',
    },
    {
        name: 'b',
        avantar: 'b',
        email: 'b',
    },
    {
        name: 'c',
        avantar: 'c',
        email: 'c',
    }
]

// 1.
const userDiv = document.querySelector('#users_container');
const animalsDiv = document.querySelector('#animals_container');

// 2.
const iterateArrays = ( list, container ) => {
    for( const element of list){
        generateHTML( element, container );
    }
};

const generateHTML = ( element, container ) => {
    const myFigure = `
        <figure>
            <h3>${element.name}</h3>
            <p>${element.email}</p>
            <img src="${element.image}" alt="${element.name}"/>
        </figure>
    `;
    print( myFigure, )
};

const print = ( tag, container) => {
    container.innerHTML += tag;
};

iterateArrays( asd, userDiv);
iterateArrays( asd, animalsDiv);