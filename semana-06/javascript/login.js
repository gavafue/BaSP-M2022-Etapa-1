document.addEventListener('DOMContentLoaded', function () {
    var homeButton = document.getElementsByClassName('home');
    for (let i = 0; i < homeButton.length; i++) {
        const boton = homeButton[i];
        boton.addEventListener('click', function () {
            window.location = 'index.html'
        })
    }
})