// Strings

// 2a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo
// el texto en mayúscula (utilizar toUpperCase).

var tranform_uppercase = 'hola como estas estamos probando';
console.log('Exercise 2a:', tranform_uppercase.toUpperCase());

// 2b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
//con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var string_cut1 = 'Gabriel Vazquez'
console.log('Exercise 2b:', string_cut1.substring(0, 5))

// 2c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var string_cut2 = 'Gabriel Vazquez'
console.log('Exercise 2c:', string_cut1.substring(string_cut2.length - 3))

// 2d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
//primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
// (utilizar substring, toUpperCase, toLowerCase y el operador +).

var string_cut3 = 'gaBriEl VA<Q1EZ';
var string_cutted3 = string_cut3.substring(0, 1).toUpperCase() +
    string_cut3.substring(1).toLocaleLowerCase();
console.log('Exercise 2d:', string_cutted3);

// 2e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var string_cut4 = 'i8ZZV x8t8Js WBuB';
var position = string_cut4.indexOf(' ');
console.log('Exercise 2e:', position);

// 2f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
// entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que 
//tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
// (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var string_cut5 = 'estados unidos';
var position1 = string_cut5.indexOf(' ');
var finished_word = string_cut5.substring(0, 1).toUpperCase() +
    string_cut5.substring(1, position1).toLocaleLowerCase() + ' ' +
    string_cut5.substring(position1 + 1, position1 + 2).toUpperCase() +
    string_cut5.substring(position1 + 2);
console.log('Exercise 2f:', finished_word);