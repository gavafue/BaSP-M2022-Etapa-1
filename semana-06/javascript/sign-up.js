function validationTextNumber(string) {
    var hasNumber = false;
    var hasLetter = false;
    for (var i = 0; i < string.length; i++) {
        const element = string[i];
        if (isNaN(element)) {
            hasLetter = true;
        }
        if (!isNaN(element)) {
            hasNumber = true;
        }
    }
    return hasLetter && hasNumber;
}

function validationEmail(email) {
    var emailConditions = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return emailConditions.test(email);
}

function validationStringLength(string, number) {
    return string.length >= number;
}

function validationTextNumberAndSpaces(string) {
    var validation = false;
    if (validationTextNumber(string)) {
        if (string.indexOf(' ') != -1) {
            validation = true;
        }
    }
    return validation;
}

document.addEventListener('DOMContentLoaded', function () {

    //Home and login Buttons
    var homeButton = document.getElementsByClassName('home');
    for (var i = 0; i < homeButton.length; i++) {
        const boton = homeButton[i];
        boton.addEventListener('click', function () {
            window.location = 'index.html';
        })
    }
    var logIn = document.getElementsByClassName('log-in');
    for (let i = 0; i < logIn.length; i++) {
        const boton = logIn[i];
        boton.addEventListener('click', function () {
            window.location = 'log-in.html'
        })
    }
})