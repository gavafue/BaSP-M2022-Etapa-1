// Funciones

// 6a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
//Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable
// en la consola del navegador.

function adition(a, b) {
    return a + b;
}
var result = adition(4, 7);
console.log('Exercise 6a:', result);

// 6b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
// no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el
// valor NaN como resultado.
function aditionWithValidation(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    } else {
        alert('Una de las entradas no es un número');
        return NaN;
    }
}
var result2 = aditionWithValidation("a", 2);
console.log('Exercise 6b:', result2);

// 6c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un
// número entero.
function validateInteger(a) {
    return (!isNaN(a) && Number.isInteger(a));
}
var result3 = validateInteger(10);
console.log('Exercise 6c:', result3);

// 6d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
//En caso que haya decimales mostrar un alerta con el error y retorna el número convertido
// a entero (redondeado).

function aditionWithIntegerValidation(a, b) {
    var isNumber = (!isNaN(a) && !isNaN(b));
    var isInteger = (Number.isInteger(a) && Number.isInteger(b));
    if (isInteger && isNumber) {
        return a + b;
    }
    if (!isNumber) {
        alert('Una de las entradas no es un número');
        return NaN;
    }
    if (isNumber && !isInteger) {
        alert('Una de las entradas no es un número entero, se redondeará.');
        return Math.round(a + b);
    }
}
var result4 = aditionWithIntegerValidation(1.6, 2);
console.log('Exercise 6d:', result4);


//  6e) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la 
//función suma probando que todo siga funcionando igual.

function validations(a, b) {
    var isNumber = (!isNaN(a) && !isNaN(b));
    var isInteger = (Number.isInteger(a)) && (Number.isInteger(b));
    if (isInteger && isNumber) {
        return 1;
    }
    if (!isNumber) {
        alert('Una de las entradas no es un número');
        return 2;
    }
    if (isNumber && !isInteger) {
        alert('Una de las entradas no es un número entero, se redondeará.');
        return 3;
    }
}

function suma1(a, b) {
    if (validations(a, b) == 1 || 3) {
        return Math.round(a + b);
    } else {
        alert('Una de las entradas no es un número');
        return NaN;
    }
}
console.log('Exercise 6e:', suma1(8.5, 2))