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
    var firstNumber;
    if (validationNumber(string) && validationText(string)) {
        if (string.indexOf(' ') != -1) {
            firstNumber = string.indexOf(' ');
            if (!isNaN(string[firstNumber + 1])) {
                validation = true;
            }
        }
    }
    return validation;
}

function lettersCounter(string) {
    var letters = 0;
    for (var i = 0; i < string.length; i++) {
        const element = string[i];
        if (isNaN(element)) {
            letters++;
        }
    }
    return letters;
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
        if (!validationText(signUpName.value) || !validationStringLength(signUpName.value, 3) ||
            validationNumber(signUpName.value)) {
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
        if (!validationText(signUpSurname.value) || !validationStringLength(signUpSurname.value, 3) ||
            validationNumber(signUpSurname.value)) {
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
        if (!validationText(passwordInput.value) || !validationNumber(passwordInput.value) ||
            !validationStringLength(passwordInput.value, 8)) {

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
    // validation from DNI
    const dniInput = document.getElementById('register-dni');
    dniInput.addEventListener('blur', function () {
        if (validationText(dniInput.value) || !validationNumber(dniInput.value) ||
            !validationStringLength(dniInput.value, 8)) {
            const dniFeedback = document.getElementById('dni-feedback');
            dniFeedback.classList = 'feedback-invalid';
            dniInput.classList = 'input-invalid';
        }
    })
    dniInput.addEventListener('focus', function () {
        const dniFeedback = document.getElementById('dni-feedback');
        dniFeedback.classList = 'feedback';
        dniInput.classList = '';
    })
    //validation from brithdate
    //Veremos que se hace acá

    //validation from telephone
    const telephoneNumberInput = document.getElementById('register-telephone');
    telephoneNumberInput.addEventListener('blur', function () {
        if (validationText(telephoneNumberInput.value) || !validationNumber(telephoneNumberInput.value) ||
            telephoneNumberInput.value.length != 10) {
            const dniFeedback = document.getElementById('telephone-feedback');
            dniFeedback.classList = 'feedback-invalid';
            telephoneNumberInput.classList = 'input-invalid';
        }
    })
    telephoneNumberInput.addEventListener('focus', function () {
        const dniFeedback = document.getElementById('telephone-feedback');
        dniFeedback.classList = 'feedback';
        telephoneNumberInput.classList = '';
    })
    // validation from address
    const adressInput = document.getElementById('register-address');
    adressInput.addEventListener('blur', function () {
        if (!validationTextNumberAndSpaces(adressInput.value) || !validationStringLength(adressInput.value, 6)) {
            const addressFeedback = document.getElementById('address-feedback');
            addressFeedback.classList = 'feedback-invalid';
            adressInput.classList = 'input-invalid';
        }
    })
    adressInput.addEventListener('focus', function () {
        const addressFeedback = document.getElementById('address-feedback');
        addressFeedback.classList = 'feedback';
        adressInput.classList = '';
    })
    //validation from city
    const cityInput = document.getElementById('register-city');
    cityInput.addEventListener('blur', function () {
        if (!validationText(cityInput.value) || !validationNumber(cityInput.value) ||
            lettersCounter(cityInput.value) < 3) {
            const cityFeedback = document.getElementById('city-feedback');
            cityFeedback.classList = 'feedback-invalid';
            cityInput.classList = 'input-invalid';
        }
    })
    cityInput.addEventListener('focus', function () {
        const cityFeedback = document.getElementById('city-feedback');
        cityFeedback.classList = 'feedback';
        cityInput.classList = '';
    })

    //validation from ZIP
    const zipInput = document.getElementById('register-zip');
    zipInput.addEventListener('blur', function () {
        if (!validationNumber(zipInput.value) || validationText(zipInput.value) ||
            zipInput.value.length < 4 || zipInput.value.length > 5) {
            const zipFeedback = document.getElementById('zip-feedback');
            zipFeedback.classList = 'feedback-invalid';
            zipInput.classList = 'input-invalid';
        }
    })
    zipInput.addEventListener('focus', function () {
        const zipFeedback = document.getElementById('zip-feedback');
        zipFeedback.classList = 'feedback';
        zipInput.classList = '';
    })


})