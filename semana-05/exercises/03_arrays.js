// Arrays

// 3a) Dado el siguiente array: 
//["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
// "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

var months = ["Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
var months3y4 = months[4] + ', ' + months[10];
console.log('Exercise 3a:', months3y4);

// 3b) Ordenar el array de months alfabéticamente y mostrarlo por consola (utilizar sort).
var months1 = ["Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
var monthsOrdened = months1.sort();
console.log('Exercise 3b:', monthsOrdened);

// 3c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

var months2 = ["Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
months2.push('hola');
months2.unshift('dos');
console.log('Exercise 3c:', months2)
// 3d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

var months3 = ["Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
months3.shift();
months3.pop();
console.log('Exercise 3d:', months3);

// 3e) Invertir el orden del array (utilizar reverse).

var months4 = ["Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
var monthsReverse = months4.reverse();
console.log('Exercise 3e:', monthsReverse);

// 3f) Unir todos los elementos del array en un único string donde cada mes este 
//separado por un guión - (utilizar join).
var months5 = ["Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
var monthsJoined = months5.join('-');
console.log('Exercise 3f:', monthsJoined);

// 3g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var monthsCopyReduced = months.slice(4, 11);
console.log('Exercise 3g:', monthsCopyReduced);