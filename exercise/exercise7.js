

let film1 = 'Regreso Dogs';
let film2 = 'El Gran Lewoski';
let film3 = 'Eend Game';
let film4 = 'Regreso al Futuro';

let arrayFilms = [film1, film2, film3, film4];

const searchMovie = param =>{
    for( let movie of arrayFilms ){
        console.log(movie.includes(param));
    }
}

searchMovie('Regreso');