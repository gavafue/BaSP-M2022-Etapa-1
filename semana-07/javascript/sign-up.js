window.onload = function () {
    //ERROR MESSAGES
    var validationsMessageLogin = '';
    var nameMessage = 'Name: ' + 'This input is empty \n';
    var surnameMessage = 'Surname: ' + 'This input is empty \n';
    var emailMessage = 'Email: ' + 'This input is empty \n';
    var passwordMessage = 'Password: ' + 'This input is empty \n';
    var repeatPasswordMessage = 'Repeat Password: ' + 'This input is empty \n';
    var dniMessage = 'DNI: ' + 'This input is empty \n';
    var birthdayMessage = 'Birthday: ' + 'This input is empty \n';
    var telephoneMessage = 'Telephone: ' + 'This input is empty \n';
    var addressMessage = 'Address: ' + 'This input is empty \n';
    var cityMessage = 'City: ' + 'This input is empty \n';
    var zipMessage = 'ZIP: ' + 'This input is empty \n';
    //HEADER BUTTONS
    var homeButton = document.getElementsByClassName('home');
    var logInButton = document.getElementsByClassName('log-in');
    //DOM ELEMENTS
    var nameInput = document.getElementById('register-name');
    var nameFeedback = document.getElementById('name-feedback');
    var surnameInput = document.getElementById('register-surname');
    var surnameFeedback = document.getElementById('surname-feedback');
    var emailInput = document.getElementById('register-email');
    var emailFeedback = document.getElementById('email-feedback');
    var passwordInput = document.getElementById('register-password');
    var passwordFeedback = document.getElementById('password-feedback');
    var repeatPasswordInput = document.getElementById('register-repeat-password');
    var repeatPasswordFeedback = document.getElementById('repeat-password-feedback');
    var dniInput = document.getElementById('register-dni');
    var dniFeedback = document.getElementById('dni-feedback');
    var birthdateInput = document.getElementById('register-birthday');
    var birthdayFeedback = document.getElementById('birthday-feedback');
    var telephoneNumberInput = document.getElementById('register-telephone');
    var telephoneFeedback = document.getElementById('telephone-feedback');
    var adressInput = document.getElementById('register-address');
    var addressFeedback = document.getElementById('address-feedback');
    var cityInput = document.getElementById('register-city');
    var cityFeedback = document.getElementById('city-feedback');
    var zipInput = document.getElementById('register-zip');
    var zipFeedback = document.getElementById('zip-feedback');
    var submitSignUp = document.getElementById('signup-submit');

    for (var i = 0; i < homeButton.length; i++) {
        var button = homeButton[i];
        button.addEventListener('click', function () {
            window.location = 'index.html';
        })
    }

    for (var i = 0; i < logInButton.length; i++) {
        var button = logInButton[i];
        button.addEventListener('click', function () {
            window.location = 'log-in.html';
        })
    }

    function validationText(string) {
        var hasLetter = false;
        for (var i = 0; i < string.length; i++) {
            var element = string[i];
            if (isNaN(element)) {
                hasLetter = true;
            }
        }
        return hasLetter;
    }

    function validationNumber(string) {
        var hasNumber = false;
        for (var i = 0; i < string.length; i++) {
            var element = string[i];
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
            if (string.indexOf(' ') != -1 && string.indexOf(' ') != 0 && string.indexOf(' ') != string.length) {
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
            var element = string[i];
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

    function transformInvalidName() {
        if (!validationText(nameInput.value) || !validationStringLength(nameInput.value, 3) ||
            validationNumber(nameInput.value)) {
            nameFeedback.classList = 'feedback-invalid';
            nameInput.classList = 'input-invalid';
            nameMessage = 'Name: ' + nameFeedback.innerText + '\n';
        } else {
            nameMessage = 'Name: ' + nameInput.value + '\n';
        }
    }

    function resetInvalidName() {
        nameFeedback.classList = 'feedback';
        nameInput.classList = '';
    }

    function transformInvalidSurname() {
        if (!validationText(surnameInput.value) || !validationStringLength(surnameInput.value, 3) ||
            validationNumber(surnameInput.value)) {
            surnameFeedback.classList = 'feedback-invalid';
            surnameInput.classList = 'input-invalid';
            surnameMessage = 'Surname: ' + surnameFeedback.innerText + '\n';
        } else {
            surnameMessage = 'Surname: ' + surnameInput.value + '\n';
        }
    }

    function resetInvalidSurname() {
        surnameFeedback.classList = 'feedback';
        surnameInput.classList = '';
    }

    function transformInvalidEmail() {
        if (!validationEmail(emailInput.value)) {
            emailFeedback.classList = 'feedback-invalid';
            emailInput.classList = 'input-invalid';
            emailMessage = 'Email: ' + emailFeedback.innerText + '\n';
        } else {
            emailMessage = 'Email: ' + emailInput.value + '\n';
        }
    }

    function resetInvalidEmail() {
        emailFeedback.classList = 'feedback';
        emailInput.classList = '';
    }

    function transformInvalidPassword() {
        if (!validationText(passwordInput.value) || !validationNumber(passwordInput.value) ||
            !validationStringLength(passwordInput.value, 8)) {
            passwordFeedback.classList = 'feedback-invalid';
            passwordInput.classList = 'input-invalid';
            passwordMessage = 'Password: ' + passwordFeedback.innerText + '\n';
        } else {
            passwordMessage = 'Password: ' + passwordInput.value + '\n';
        }
    }

    function resetInvalidPassword() {
        passwordFeedback.classList = 'feedback';
        passwordInput.classList = '';
    }

    function transforInvalidRepeatPassword() {
        if (!validationText(repeatPasswordInput.value) || !validationNumber(repeatPasswordInput.value) ||
            !validationStringLength(repeatPasswordInput.value, 8)) {
            repeatPasswordFeedback.classList = 'feedback-invalid';
            repeatPasswordInput.classList = 'input-invalid';
            repeatPasswordMessage = 'Repeat Password: ' + repeatPasswordFeedback.innerText + '\n';
        } else {
            repeatPasswordMessage = 'Repeat Password: ' + repeatPasswordInput.value + '\n';
        }
    }

    function resetInvalidRepeatPassword() {
        repeatPasswordFeedback.classList = 'feedback';
        repeatPasswordInput.classList = '';
    }

    function transformInvalidDNI() {
        if (validationText(dniInput.value) || !validationNumber(dniInput.value) ||
            !validationStringLength(dniInput.value, 8)) {
            dniFeedback.classList = 'feedback-invalid';
            dniInput.classList = 'input-invalid';
            dniMessage = 'DNI: ' + dniFeedback.innerText + '\n';
        } else {
            dniMessage = 'DNI: ' + dniInput.value + '\n';
        }
    }

    function resetInvalidDNI() {
        dniFeedback.classList = 'feedback';
        dniInput.classList = '';
    }

    function transformInvalidBirthday() {
        if (!validationDate(birthdateInput.value)) {
            birthdayFeedback.classList = 'feedback-invalid';
            birthdateInput.classList = 'input-invalid';
            birthdayMessage = 'Birthday: ' + birthdayFeedback.innerText + '\n';
        } else {
            birthdayMessage = 'Birthday: ' + birthdateInput.value + '\n';
        }
    }

    function resetInvalidBirthday() {
        birthdayFeedback.classList = 'feedback';
        birthdateInput.classList = '';
    }

    function transformInvalidTelephone() {
        if (validationText(telephoneNumberInput.value) || !validationNumber(telephoneNumberInput.value) ||
            telephoneNumberInput.value.length != 10) {
            telephoneFeedback.classList = 'feedback-invalid';
            telephoneNumberInput.classList = 'input-invalid';
            telephoneMessage = 'Telephone: ' + telephoneFeedback.innerText + '\n';
        } else {
            telephoneMessage = 'Telephone: ' + telephoneNumberInput.value + '\n';
        }
    }

    function resetInvalidTelephone() {
        telephoneFeedback.classList = 'feedback';
        telephoneNumberInput.classList = '';
    }

    function transformInvalidAddress() {
        if (!validationTextNumberAndSpaces(adressInput.value) || !validationStringLength(adressInput.value, 6)) {
            addressFeedback.classList = 'feedback-invalid';
            adressInput.classList = 'input-invalid';
            addressMessage = 'Address: ' + addressFeedback.innerText + '\n';
        } else {
            addressMessage = 'Address: ' + adressInput.value + '\n';
        }
    }

    function resetInvalidAddress() {
        addressFeedback.classList = 'feedback';
        adressInput.classList = '';
    }

    function trasnformInvalidCity() {
        if (!validationText(cityInput.value) || !validationNumber(cityInput.value) ||
            lettersCounter(cityInput.value) < 3) {
            cityFeedback.classList = 'feedback-invalid';
            cityInput.classList = 'input-invalid';
            cityMessage = 'City: ' + cityFeedback.innerText + '\n';
        } else {
            cityMessage = 'City: ' + cityInput.value + '\n';
        }
    }

    function resetInvalidCity() {
        cityFeedback.classList = 'feedback';
        cityInput.classList = '';
    }

    function transformInvalidZIP() {
        if (!validationNumber(zipInput.value) || validationText(zipInput.value) ||
            zipInput.value.length < 4 || zipInput.value.length > 5) {
            zipFeedback.classList = 'feedback-invalid';
            zipInput.classList = 'input-invalid';
            zipMessage = 'ZIP: ' + zipFeedback.innerText + '\n';
        } else {
            zipMessage = 'ZIP: ' + zipInput.value + '\n';
        }
    }

    function resetInvalidZIP() {
        zipFeedback.classList = 'feedback';
        zipInput.classList = '';
    }

    function sendAlertWithFeedbacks() {
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
    }


    nameInput.addEventListener('focus', resetInvalidName);
    nameInput.addEventListener('blur', transformInvalidName);
    surnameInput.addEventListener('blur', transformInvalidSurname);
    surnameInput.addEventListener('focus', resetInvalidSurname);
    emailInput.addEventListener('blur', transformInvalidEmail);
    emailInput.addEventListener('focus', resetInvalidEmail);
    passwordInput.addEventListener('blur', transformInvalidPassword);
    passwordInput.addEventListener('focus', resetInvalidPassword);
    repeatPasswordInput.addEventListener('blur', transforInvalidRepeatPassword);
    repeatPasswordInput.addEventListener('focus', resetInvalidRepeatPassword);
    dniInput.addEventListener('blur', transformInvalidDNI);
    dniInput.addEventListener('focus', resetInvalidDNI);
    birthdateInput.addEventListener('blur', transformInvalidBirthday)
    birthdateInput.addEventListener('focus', resetInvalidBirthday)
    telephoneNumberInput.addEventListener('blur', transformInvalidTelephone);
    telephoneNumberInput.addEventListener('focus', resetInvalidTelephone);
    adressInput.addEventListener('blur', transformInvalidAddress);
    adressInput.addEventListener('focus', resetInvalidAddress);
    cityInput.addEventListener('blur', trasnformInvalidCity);
    cityInput.addEventListener('focus', resetInvalidCity);
    zipInput.addEventListener('blur', transformInvalidZIP);
    zipInput.addEventListener('focus', resetInvalidZIP);
    submitSignUp.addEventListener('click', sendAlertWithFeedbacks);
}