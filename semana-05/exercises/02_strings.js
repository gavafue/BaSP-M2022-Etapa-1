// Strings

// 2a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo
// el texto en mayúscula (utilizar toUpperCase).

var tranformUppercase = 'hola como estas estamos probando';
var stringCutted = tranformUppercase.toUpperCase();
console.log('Exercise 2a:', stringCutted);

// 2b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
//con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var stringCut1 = 'Gabriel Vazquez'
var stringCutted1 = stringCut1.substring(0, 5);
console.log('Exercise 2b:', stringCutted1)

// 2c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var stringCut2 = 'Gabriel Vazquez'
var stringCutted2 = stringCut1.substring(stringCut2.length - 3);
console.log('Exercise 2c:', stringCutted2)

// 2d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
//primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
// (utilizar substring, toUpperCase, toLowerCase y el operador +).

var stringCut3 = 'gaBriEl VA<Q1EZ';
var stringCutted3 = stringCut3.substring(0, 1).toUpperCase() +
    stringCut3.substring(1).toLocaleLowerCase();
console.log('Exercise 2d:', stringCutted3);

// 2e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var stringCut4 = 'i8ZZV x8t8Js WBuB';
var position = stringCut4.indexOf(' ');
console.log('Exercise 2e:', position);

// 2f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
// entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que 
//tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
// (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var stringCut5 = 'estados unidos';
var position1 = stringCut5.indexOf(' ');
var finished_word = stringCut5.substring(0, 1).toUpperCase() +
    stringCut5.substring(1, position1).toLocaleLowerCase() + ' ' +
    stringCut5.substring(position1 + 1, position1 + 2).toUpperCase() +
    stringCut5.substring(position1 + 2);
console.log('Exercise 2f:', finished_word);