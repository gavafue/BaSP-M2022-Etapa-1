function validationText(string) {
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
    return hasLetter;
}

function validationNumber(string) {
    var hasNumber = false;
    for (var i = 0; i < string.length; i++) {
        const element = string[i];
        if (!isNaN(element)) {
            hasNumber = true;
        }
    }
    return hasNumber;
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
    //validation from name and surname.
    const signUpName = document.getElementById('register-name');
    const signUpSurname = document.getElementById('register-surname');
    signUpName.addEventListener('blur', function () {
        if (!(validationText(signUpName.value) && validationStringLength(signUpName.value, 3))) {
            const nameFeedback = document.getElementById('name-feedback');
            nameFeedback.classList = 'feedback-invalid';
            signUpName.classList = 'input-invalid';
        }
    })
    signUpName.addEventListener('focus', function () {
        const nameFeedback = document.getElementById('name-feedback');
        nameFeedback.classList = 'feedback';
        signUpName.classList = '';
    })

    signUpSurname.addEventListener('blur', function () {
        if (!(validationText(signUpSurname.value) && validationStringLength(signUpSurname.value, 3))) {
            const nameFeedback = document.getElementById('surname-feedback');
            nameFeedback.classList = 'feedback-invalid';
            signUpSurname.classList = 'input-invalid';
        }
    })
    signUpSurname.addEventListener('focus', function () {
        const nameFeedback = document.getElementById('surname-feedback');
        nameFeedback.classList = 'feedback';
        signUpSurname.classList = '';
    })
    //validation from email
    const signUpEmail = document.getElementById('register-email');
    signUpEmail.addEventListener('blur', function () {
        if (!validationEmail(signUpEmail.value)) {
            const emailFeedback = document.getElementById('email-feedback');
            emailFeedback.classList = 'feedback-invalid';
            signUpEmail.classList = 'input-invalid';
        }
    })
    signUpEmail.addEventListener('focus', function () {
        const emailFeedback = document.getElementById('email-feedback');
        emailFeedback.classList = 'feedback';
        signUpEmail.classList = '';
    })

    //validation from password
    const passwordInput = document.getElementById('register-password');
    passwordInput.addEventListener('blur', function () {
        if (!validationText(passwordInput.value) || !validationNumber(passwordInput.value) 
        || !validationStringLength(passwordInput.value, 8)) {
            
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
    // validation from repeat password
    const repeatPasswordInput = document.getElementById('register-repeat-password');
    repeatPasswordInput.addEventListener('blur', function () {
        if (!validationText(repeatPasswordInput.value) || !validationNumber(repeatPasswordInput.value) ||
            !validationStringLength(repeatPasswordInput.value, 8)) {
            const passwordFeedback = document.getElementById('repeat-password-feedback');
            passwordFeedback.classList = 'feedback-invalid';
            repeatPasswordInput.classList = 'input-invalid';

        }
    })
    repeatPasswordInput.addEventListener('focus', function () {
        const passwordFeedback = document.getElementById('repeat-password-feedback');
        passwordFeedback.classList = 'feedback';
        repeatPasswordInput.classList = '';
    })
})