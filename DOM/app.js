
let hero = document.querySelector('#hero');
console.log( hero );

let gallery = document.querySelector('.gallery');
console.log( gallery );

let textList = document.querySelectorAll('.text');

console.log( textList );

let image = document.querySelector('.image').getAttribute;

console.log( image );

let p = document.createElement('p');

console.log( p );

let text = document.createTextNode('Creado con JS');


console.log( text );

p.appendChild(text);

console.log( p );

hero.appendChild( p );

// ----------------------- //

let div = document.createElement('div');
let pToDiv = document.createElement('p');
div.appendChild(p);
let textToDiv = document.createTextNode('Creado para guardar en el p');
pToDiv.appendChild(textToDiv);
gallery.appendChild(div);

// ------------------ // 

const listNumber =[1,2,3,4,5,6,7,8,9];

// lo quiero recorrer y crear un p para cada uno de ellos y meterlo dentro de div numbers

let numberBlock = document.querySelector('#numbers');

listNumber.forEach( e => {
    let p = document.createElement('p');
    p.innerHTML = e;
    numberBlock.appendChild( p );
})