//Objeto que almacena todos los errores
var allValidations = {
    name: 'Empty input',
    surname: 'Empty input',
    password: 'Empty input',
    email: 'Empty input',
    repeatPassword: 'Empty input',
    dni: 'Empty input',
    birthday: 'Empty input',
    telephone: 'Empty input',
    address: 'Empty input',
    city: 'Empty input',
    zip: 'Empty input'
};


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
    var gotSpace = false;
    var firstSpace;
    if (validationNumber(string) && validationText(string)) {
        if (string.indexOf(' ') != -1 && string.indexOf(' ') != 0) {
            firstSpace = string.indexOf(' ');
            if (!isNaN(string[firstSpace + 1])) {
                gotSpace = true;
            }
        }
    }
    return gotSpace;
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

function validationDate(string) {
    var validDate = false;
    const firstSlash = string.indexOf('-');
    const secondSlash = string.indexOf('-', firstSlash + 1)
    const existThirdSlash = string.indexOf('-', secondSlash + 1) != -1;
    console.log('date', string);
    const year = string.substring(0, firstSlash);
    console.log('year', year);
    const month = string.substring(firstSlash + 1, secondSlash);
    console.log('month', month);
    const day = string.substring(secondSlash + 1);
    console.log('day', day);

    if (day.length == 2 && month.length == 2 && year.length == 4 && !existThirdSlash) {
        if (day < 32 && day > 0) {
            if (month > 0 && month < 13) {
                if (year > 1800 && year < 2023) {
                    validDate = true;
                }
            }
        }
    }
    return validDate;
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
    const nameInput = document.getElementById('register-name');
    const surnameInput = document.getElementById('register-surname');
    nameInput.addEventListener('blur', function () {
        if (!validationText(nameInput.value) || !validationStringLength(nameInput.value, 3) ||
            validationNumber(nameInput.value)) {
            const nameFeedback = document.getElementById('name-feedback');
            nameFeedback.classList = 'feedback-invalid';
            nameInput.classList = 'input-invalid';
            allValidations.name = 'ERROR, check it.'
        } else {
            allValidations.name = nameInput.value;
        }
    })
    nameInput.addEventListener('focus', function () {
        const nameFeedback = document.getElementById('name-feedback');
        nameFeedback.classList = 'feedback';
        nameInput.classList = '';
    })

    surnameInput.addEventListener('blur', function () {
        if (!validationText(surnameInput.value) || !validationStringLength(surnameInput.value, 3) ||
            validationNumber(surnameInput.value)) {
            const nameFeedback = document.getElementById('surname-feedback');
            nameFeedback.classList = 'feedback-invalid';
            surnameInput.classList = 'input-invalid';
            allValidations.surname = 'ERROR, check it.'
        } else {
            allValidations.surname = surnameInput.value;
        }
    })
    surnameInput.addEventListener('focus', function () {
        const nameFeedback = document.getElementById('surname-feedback');
        nameFeedback.classList = 'feedback';
        surnameInput.classList = '';
    })
    // validation from email
    const emailInput = document.getElementById('register-email');
    emailInput.addEventListener('blur', function () {
        if (!validationEmail(emailInput.value)) {
            const emailFeedback = document.getElementById('email-feedback');
            emailFeedback.classList = 'feedback-invalid';
            emailInput.classList = 'input-invalid';
            allValidations.email = 'ERROR, check it.'
        } else {
            allValidations.email = emailInput.value;
        }

    })
    emailInput.addEventListener('focus', function () {
        const emailFeedback = document.getElementById('email-feedback');
        emailFeedback.classList = 'feedback';
        emailInput.classList = '';
    })

    //validation from password
    const passwordInput = document.getElementById('register-password');
    passwordInput.addEventListener('blur', function () {
        if (!validationText(passwordInput.value) || !validationNumber(passwordInput.value) ||
            !validationStringLength(passwordInput.value, 8)) {

            const passwordFeedback = document.getElementById('password-feedback');
            passwordFeedback.classList = 'feedback-invalid';
            passwordInput.classList = 'input-invalid';
            allValidations.password = 'ERROR, check it.'
        } else {
            allValidations.password = passwordInput.value;
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
            allValidations.repeatPassword = 'ERROR, check it.'
        } else {
            allValidations.repeatPassword = repeatPasswordInput.value;
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
            allValidations.dni = 'ERROR, check it.'
        } else {
            allValidations.dni = dniInput.value;
        }
    })
    dniInput.addEventListener('focus', function () {
        const dniFeedback = document.getElementById('dni-feedback');
        dniFeedback.classList = 'feedback';
        dniInput.classList = '';
    })
    //validation from brithdate
    //Veremos que se hace acá
    const birthdateInput = document.getElementById('register-birthday');
    birthdateInput.addEventListener('blur', function () {

        console.log(validationDate(birthdateInput.value.toString()));
    })
    //validation from telephone
    const telephoneNumberInput = document.getElementById('register-telephone');
    telephoneNumberInput.addEventListener('blur', function () {
        if (validationText(telephoneNumberInput.value) || !validationNumber(telephoneNumberInput.value) ||
            telephoneNumberInput.value.length != 10) {
            const dniFeedback = document.getElementById('telephone-feedback');
            dniFeedback.classList = 'feedback-invalid';
            telephoneNumberInput.classList = 'input-invalid';
            allValidations.telephone = 'ERROR, check it.'
        } else {
            allValidations.telephone = telephoneNumberInput.value;
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
            allValidations.address = 'ERROR, check it.'
        } else {
            allValidations.address = adressInput.value;
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
            allValidations.city = 'ERROR, check it.'
        } else {
            allValidations.city = cityInput.value;
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
            allValidations.zip = 'ERROR, check it.'
        } else {
            allValidations.zip = zipInput.value;
        }
    })
    zipInput.addEventListener('focus', function () {
        const zipFeedback = document.getElementById('zip-feedback');
        zipFeedback.classList = 'feedback';
        zipInput.classList = '';
    })


    var submitSignUp = document.getElementById('signup-submit');
    submitSignUp.addEventListener('click', function () {
        alert(JSON.stringify(allValidations));
    })
})