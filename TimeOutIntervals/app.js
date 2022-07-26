// let timeOut;

// const showGreating = () => {
//     timeOut = setTimeout( alertGreeting(), 1000);
// }

// const alertGreeting = () => {
//     alert('Hola despues de un segundo');
// }

// showGreating();

// const clearGreeting = () =>{
//     console.log('Clean');
//     window.clearTimeout( timeOut );
// }

// const cleanWindow = () => {
//     console.log('Clean');
//     setTimeout( clearGreeting, 4000);
// }

// cleanWindow();


// // -----------------

// let timeOut2;

// const showGreating2 = () => {
//     console.log('Show');
//     timeOut2 = setTimeout( alertGreeting, 2000 );
// }

// const alertGreeting2 = () => {
//     console.log('Alert');
//     alert('Hola despues de 2 segundos');
// }

// showGreating2();

let interval;
let seconds = 0;

const createInterval = () => {
    interval = setInterval(newTime, 1000);
}

const newTime = () => {
    seconds++;
    console.log(`Tiempo ${seconds}`);
    if( seconds == 20) {
        logout();
    }
}

const logout = () => {
    console.log('Fuera de la app');
}

createInterval();