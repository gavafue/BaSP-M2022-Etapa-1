// 4a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
// si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y 
//sino un alerta con el mensaje “Lower than 0,5”.

var random = Math.random();
if (random <= 0.5) {
    alert('The number ' + random + ' is lower than 0,5');
    console.log('Exercise 4a: Lower than 0,5', random);
} else {
    alert('The number ' + random + ' is greater than 0,5');
    console.log('Exercise 4a: Greater than 0,5', random);
}

//4b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes
// mensajes de alerta:
// “Bebe” si la edad es menor a 2 años;
// “Niño” si la edad es entre 2 y 12 años;
// “Adolescente” entre 13 y 19 años;
// “Joven” entre 20 y 30 años;
// “Adulto” entre 31 y 60 años;
// “Adulto mayor” entre 61 y 75 años;
// “Anciano” si es mayor a 75 años.

var age = prompt('Ingrese un número entre 0 y 100');

if (age < 2) {
    alert('It is a baby');
}
if (age >= 2 && age <= 12) {
    alert('It is a child');
}
if (age > 12 && age <= 19) {
    alert('It is a teen');
}
if (age > 19 && age <= 30) {
    alert('It is a young');
}
if (age > 30 && age <= 60) {
    alert('It is a adult');
}
if (age > 60 && age <= 75) {
    alert('It is a oldier adult');
}
if (age > 75) {
    alert('It is a oldest adult');
}
