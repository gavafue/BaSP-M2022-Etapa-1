document.addEventListener('DOMContentLoaded', function () {
     var signUp = document.getElementsByClassName('sign-up');
    for (let i = 0; i < signUp.length; i++) {
        const boton = signUp[i];
        boton.addEventListener('click', function () {
            window.location = 'sign-up.html'
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