//Objeto que almacena todos los errores
var validationsMessageLogin = "";
var nameMessage = 'Name: ' + "This input is empty \n";
var surnameMessage = 'Surname: ' + "This input is empty \n";
var emailMessage = 'Email: ' + "This input is empty \n";
var passwordMessage = 'Password: ' + "This input is empty \n";
var repeatPasswordMessage = 'Repeat Password: ' + "This input is empty \n";
var dniMessage = 'DNI: ' + "This input is empty \n";
var birthdayMessage = 'Birthday: ' + "This input is empty \n";
var telephoneMessage = 'Telephone: ' + "This input is empty \n";
var addressMessage = 'Address: ' + "This input is empty \n";
var cityMessage = 'City: ' + "This input is empty \n";
var zipMessage = 'ZIP: ' + "This input is empty \n";

function validationText(string) {
    var hasLetter = false;
    for (var i = 0; i < string.length; i++) {
        const element = string[i];
        if (isNaN(element)) {
            hasLetter = true;
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
    var todayDate = new Date();
    var inputDate = new Date(string);
    return todayDate > inputDate;
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
            nameMessage = 'Name: ' + nameFeedback.innerText + '\n';
        } else {
            nameMessage = 'Name: ' + nameInput.value + '\n';
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
            const surnameFeedback = document.getElementById('surname-feedback');
            surnameFeedback.classList = 'feedback-invalid';
            surnameInput.classList = 'input-invalid';
            surnameMessage = 'Surname: ' + surnameFeedback.innerText + '\n'
        } else {
            surnameMessage = 'Surname: ' + surnameInput.value + '\n';
        }
    })
    surnameInput.addEventListener('focus', function () {
        const surnameFeedback = document.getElementById('surname-feedback');
        surnameFeedback.classList = 'feedback';
        surnameInput.classList = '';
    })
    // validation from email
    const emailInput = document.getElementById('register-email');
    emailInput.addEventListener('blur', function () {
        if (!validationEmail(emailInput.value)) {
            const emailFeedback = document.getElementById('email-feedback');
            emailFeedback.classList = 'feedback-invalid';
            emailInput.classList = 'input-invalid';
            emailMessage = 'Email: ' + emailFeedback.innerText + '\n'
        } else {
            emailMessage = 'Email: ' + emailInput.value + '\n';
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
            passwordMessage = 'Password: ' + passwordFeedback.innerText + '\n'
        } else {
            passwordMessage = 'Password: ' + passwordInput.value + '\n';
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
            const repeatPasswordFeedback = document.getElementById('repeat-password-feedback');
            repeatPasswordFeedback.classList = 'feedback-invalid';
            repeatPasswordInput.classList = 'input-invalid';
            repeatPasswordMessage = 'Repeat Password: ' + repeatPasswordFeedback.innerText + '\n'
        } else {
            repeatPasswordMessage = 'Repeat Password: ' + repeatPasswordInput.value + '\n';
        }
    })
    repeatPasswordInput.addEventListener('focus', function () {
        const repeatPasswordFeedback = document.getElementById('repeat-password-feedback');
        repeatPasswordFeedback.classList = 'feedback';
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
            dniMessage = 'DNI: ' + dniFeedback.innerText + '\n'
        } else {
            dniMessage = 'DNI: ' + dniInput.value + '\n';
        }
    })
    dniInput.addEventListener('focus', function () {
        const dniFeedback = document.getElementById('dni-feedback');
        dniFeedback.classList = 'feedback';
        dniInput.classList = '';
    })
    //validation from brithdate
    const birthdateInput = document.getElementById('register-birthday');
    birthdateInput.addEventListener('blur', function () {
        if (!validationDate(birthdateInput.value)) {
            const birthdayFeedback = document.getElementById('birthday-feedback');
            birthdayFeedback.classList = 'feedback-invalid';
            birthdateInput.classList = 'input-invalid';
            birthdayMessage = 'Birthday: ' + birthdayFeedback.innerText + '\n'
        } else {
            birthdayMessage = 'Birthday: ' + birthdateInput.value + '\n';
        }
    })
    birthdateInput.addEventListener('focus', function () {
        const birthdayFeedback = document.getElementById('birthday-feedback');
        birthdayFeedback.classList = 'feedback';
        birthdateInput.classList = '';
    })
    //validation from telephone
    const telephoneNumberInput = document.getElementById('register-telephone');
    telephoneNumberInput.addEventListener('blur', function () {
        if (validationText(telephoneNumberInput.value) || !validationNumber(telephoneNumberInput.value) ||
            telephoneNumberInput.value.length != 10) {
            const telephoneFeedback = document.getElementById('telephone-feedback');
            telephoneFeedback.classList = 'feedback-invalid';
            telephoneNumberInput.classList = 'input-invalid';
            telephoneMessage = 'Telephone: ' + telephoneFeedback.innerText + '\n'
        } else {
            telephoneMessage = 'Telephone: ' + telephoneNumberInput.value + '\n';
        }
    })
    telephoneNumberInput.addEventListener('focus', function () {
        const telephoneFeedback = document.getElementById('telephone-feedback');
        telephoneFeedback.classList = 'feedback';
        telephoneNumberInput.classList = '';
    })
    // validation from address
    const adressInput = document.getElementById('register-address');
    adressInput.addEventListener('blur', function () {
        if (!validationTextNumberAndSpaces(adressInput.value) || !validationStringLength(adressInput.value, 6)) {
            const addressFeedback = document.getElementById('address-feedback');
            addressFeedback.classList = 'feedback-invalid';
            adressInput.classList = 'input-invalid';
            addressMessage = 'Address: ' + addressFeedback.innerText + '\n'
        } else {
            addressMessage = 'Address: ' + adressInput.value + '\n';
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
            cityMessage = 'City: ' + cityFeedback.innerText + '\n'
        } else {
            cityMessage = 'City: ' + cityInput.value + '\n';
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
            zipMessage = 'ZIP: ' + zipFeedback.innerText + '\n'
        } else {
            zipMessage = 'ZIP: ' + zipInput.value + '\n';
        }
    })
    zipInput.addEventListener('focus', function () {
        const zipFeedback = document.getElementById('zip-feedback');
        zipFeedback.classList = 'feedback';
        zipInput.classList = '';
    })


    var submitSignUp = document.getElementById('signup-submit');
    submitSignUp.addEventListener('click', function () {
        validationsMessageLogin =
            nameMessage +
            surnameMessage +
            emailMessage +
            passwordMessage +
            repeatPasswordMessage +
            dniMessage +
            birthdayMessage +
            telephoneMessage +
            addressMessage +
            cityMessage +
            zipMessage;
        alert(validationsMessageLogin);
    })
})