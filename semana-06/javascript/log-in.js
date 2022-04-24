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
document.addEventListener('DOMContentLoaded', function () {
    //Function thas redirect the buttons with class "home" to the landing.
    var passwordInput = document.getElementById('password');
    var emailInput = document.getElementById('email');
    var homeButton = document.getElementsByClassName('home');
    for (var i = 0; i < homeButton.length; i++) {
        const boton = homeButton[i];
        boton.addEventListener('click', function () {
            window.location = 'index.html';
        })
    }
    var signUp = document.getElementsByClassName('sign-up');
    for (var i = 0; i < signUp.length; i++) {
        const boton = signUp[i];
        boton.addEventListener('click', function () {
            window.location = 'sign-up.html'
        })
    }
    passwordInput.addEventListener('blur', function () {
        var passwordValue = document.getElementById('password').value;
        if (validationTextNumber(passwordValue) == false) {
            const passwordFeedback = document.getElementById('password-feedback');
            passwordFeedback.classList = 'feedback-invalid';
            passwordInput.classList = 'input-invalid';
        }
    })
    passwordInput.addEventListener('focus', function () {
        const passwordFeedback = document.getElementById('password-feedback');
        passwordFeedback.classList = 'feedback';
        passwordInput.classList = '';
    })
    emailInput.addEventListener('blur',function(){
        console.log(validationEmail(emailInput.value));
        if (validationEmail(emailInput.value) == false) {
            const emailFeedback = document.getElementById('email-feedback');
            emailFeedback.classList = 'feedback-invalid';
            emailInput.classList = 'input-invalid';
        }
    })
    emailInput.addEventListener('focus', function () {
        const emailFeedback = document.getElementById('email-feedback');
        emailFeedback.classList = 'feedback';
        emailInput.classList = '';
    })
})