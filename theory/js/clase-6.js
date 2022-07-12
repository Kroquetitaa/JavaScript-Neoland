

// OR - o = ||
let isDeveloper = true;
let isFullJavaScript = true;

let isReactDeveloper = isDeveloper || isFullJavaScript;

console.log( isReactDeveloper );

// AND - Y = &&
let isNodeDeveloper = isDeveloper && isFullJavaScript;
console.log( isNodeDeveloper );

// NOT - ! = No - Lo contrario
let tengoCoche = false;
let tengoCarnetDeConducir = true;
let puedoConducir = !tengoCoche && tengoCarnetDeConducir;
