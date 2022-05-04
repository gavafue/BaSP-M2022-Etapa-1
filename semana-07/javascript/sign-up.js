window.onload = function () {
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
    var addressInput = document.getElementById('register-address');
    var addressFeedback = document.getElementById('address-feedback');
    var cityInput = document.getElementById('register-city');
    var cityFeedback = document.getElementById('city-feedback');
    var zipInput = document.getElementById('register-zip');
    var zipFeedback = document.getElementById('zip-feedback');
    var submitSignUp = document.getElementById('signup-submit');

    function checkLocalStorageCredentials() {
        if (localStorage.name && localStorage.surname && localStorage.email &&
            localStorage.password && localStorage.dni && localStorage.birthdate &&
            localStorage.telephone && localStorage.address && localStorage.city &&
            localStorage.zip) {
            nameInput.value = localStorage.name;
            surnameInput.value = localStorage.surname;
            emailInput.value = localStorage.email;
            passwordInput.value = localStorage.password;
            repeatPasswordInput.value = localStorage.password;
            dniInput.value = localStorage.dni;
            birthdateInput.value = localStorage.birthdate;
            telephoneNumberInput.value = localStorage.telephone;
            addressInput.value = localStorage.address;
            cityInput.value = localStorage.city;
            zipInput.value = localStorage.zip;
        }
    }
    checkLocalStorageCredentials();
    //ERROR MESSAGES
    var validationsMessageLogin = '';
    var nameMessage = 'Name: ' + nameInput.value + '\n';
    var surnameMessage = 'Surname: ' + surnameInput.value + '\n';
    var emailMessage = 'Email: ' + emailInput.value + '\n';
    var passwordMessage = 'Password: ' + passwordInput.value + '\n';
    var repeatPasswordMessage = 'Repeat Password: ' + repeatPasswordInput.value + '\n';
    var dniMessage = 'DNI: ' + dniInput.value + '\n';
    var birthdayMessage = 'Birthday: ' + birthdateInput.value + '\n';
    var telephoneMessage = 'Telephone: ' + telephoneNumberInput.value + '\n';
    var addressMessage = 'Address: ' + addressInput.value + '\n';
    var cityMessage = 'City: ' + cityInput.value + '\n';
    var zipMessage = 'ZIP: ' + zipInput.value + '\n';

    //BUTTONS OF HOME, LOGIN AND SIGNUO OF THE HEADER
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

    function validationHasText(string) {
        var hasLetter = false;
        for (var i = 0; i < string.length; i++) {
            var element = string[i];
            if (isNaN(element)) {
                hasLetter = true;
            }
        }
        return hasLetter;
    }

    function validationHasNumber(string) {
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
        if (validationHasNumber(string) && validationHasText(string)) {
            if (string.indexOf(' ') != -1 && string.indexOf(' ') != 0 && string.indexOf(' ') != string.length) {
                firstSpace = string.indexOf(' ');
                if (!isNaN(string[firstSpace + 1]) && isNaN(string[firstSpace - 1])) {
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

    function validationBirthdateFormat(string) {
        var dateIsValid = false;
        if (string.length == 10) {
            if (string[2] == '/' && string[5] == '/') {
                var todayDate = new Date();
                var birthdayDate = new Date(string.substring(6), string.substring(3, 5) - 1, string.substring(0, 2));
                dateIsValid = todayDate > birthdayDate;
            }
        }
        return dateIsValid;
    }

    function transformInvalidName() {
        if (!validationHasText(nameInput.value) || !validationStringLength(nameInput.value, 3) ||
            validationHasNumber(nameInput.value)) {
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
        if (!validationHasText(surnameInput.value) || !validationStringLength(surnameInput.value, 3) ||
            validationHasNumber(surnameInput.value)) {
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
        if (!validationHasText(passwordInput.value) || !validationHasNumber(passwordInput.value) ||
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
        if (!validationHasText(repeatPasswordInput.value) || !validationHasNumber(repeatPasswordInput.value) ||
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
        if (validationHasText(dniInput.value) || !validationHasNumber(dniInput.value) ||
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
        if (!validationBirthdateFormat(birthdateInput.value)) {
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
        if (validationHasText(telephoneNumberInput.value) || !validationHasNumber(telephoneNumberInput.value) ||
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
        if (!validationTextNumberAndSpaces(addressInput.value) || !validationStringLength(addressInput.value, 6)) {
            addressFeedback.classList = 'feedback-invalid';
            addressInput.classList = 'input-invalid';
            addressMessage = 'Address: ' + addressFeedback.innerText + '\n';
        } else {
            addressMessage = 'Address: ' + addressInput.value + '\n';
        }
    }

    function resetInvalidAddress() {
        addressFeedback.classList = 'feedback';
        addressInput.classList = '';
    }

    function trasnformInvalidCity() {
        if (!validationHasText(cityInput.value) || !validationHasNumber(cityInput.value) ||
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
        if (!validationHasNumber(zipInput.value) || validationHasText(zipInput.value) ||
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

    function sendAlertWithFeedbacks(event) {
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
        event.preventDefault();
        serverRequest();
    }

    function allTheFormsInputAreOk() {
        var validationNameInput = validationHasText(nameInput.value) &&
            validationStringLength(nameInput.value, 3) && !validationHasNumber(nameInput.value);
        var validationSurnameInput = validationHasText(surnameInput.value) &&
            validationStringLength(surnameInput.value, 3) &&
            !validationHasNumber(surnameInput.value);
        var validationEmailInput = validationEmail(emailInput.value);
        var validationPassWordInput = validationHasText(passwordInput.value) &&
            validationHasNumber(passwordInput.value) &&
            validationStringLength(passwordInput.value, 8);
        var validationDniInput = !validationHasText(dniInput.value) &&
            validationHasNumber(dniInput.value) &&
            (dniInput.value.length == 7 || dniInput.value.length == 8);
        var validationBirthayInput = validationBirthdateFormat(birthdateInput.value);
        var validationTelephoneInput = !validationHasText(telephoneNumberInput.value) &&
            validationHasNumber(telephoneNumberInput.value) &&
            telephoneNumberInput.value.length == 10;
        var validationAddressInput = validationTextNumberAndSpaces(addressInput.value) &&
            validationStringLength(addressInput.value, 6);
        var validationCityInput = validationHasText(cityInput.value) &&
            validationHasNumber(cityInput.value) &&
            lettersCounter(cityInput.value) > 3;
        var validationZipInput = validationHasNumber(zipInput.value) &&
            !validationHasText(zipInput.value) &&
            (zipInput.value.length == 4 || zipInput.value.length == 5);
        return validationNameInput && validationSurnameInput && validationEmailInput &&
            validationPassWordInput && validationDniInput && validationBirthayInput &&
            validationTelephoneInput && validationAddressInput && validationCityInput &&
            validationZipInput;
    }

    function serverRequest() {
        if (allTheFormsInputAreOk()) {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?' +
                    'name=' + nameInput.value +
                    '&lastName=' + surnameInput.value +
                    '&email=' + emailInput.value +
                    '&password=' + passwordInput.value +
                    '&dni=' + dniInput.value +
                    '&dob=' + birthdateInput.value +
                    '&phone=' + telephoneNumberInput.value +
                    '&address=' + addressInput.value +
                    '&city=' + cityInput.value +
                    '&zip=' + zipInput.value)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.success == true) {
                        alert('¡Request done!\n' + validationsMessageLogin + '\n' + data.msg);
                        saveCredentialsLocalStorage();
                    } else {
                        alert(data.msg);
                    }
                }).catch(function (error) {
                    alert('Something was failed in te comunication:' + error.name +'\n' + error.message);
                });
        } else {
            alert('One or more inputs are not valid.\n' + validationsMessageLogin +
                '\n¡Check the inputs errors before continue!')
        }
    }

    function saveCredentialsLocalStorage() {
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('surname', surnameInput.value);
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passwordInput.value);
        localStorage.setItem('dni', dniInput.value);
        localStorage.setItem('birthdate', birthdateInput.value);
        localStorage.setItem('telephone', telephoneNumberInput.value);
        localStorage.setItem('address', addressInput.value);
        localStorage.setItem('city', cityInput.value);
        localStorage.setItem('zip', zipInput.value);
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
    addressInput.addEventListener('blur', transformInvalidAddress);
    addressInput.addEventListener('focus', resetInvalidAddress);
    cityInput.addEventListener('blur', trasnformInvalidCity);
    cityInput.addEventListener('focus', resetInvalidCity);
    zipInput.addEventListener('blur', transformInvalidZIP);
    zipInput.addEventListener('focus', resetInvalidZIP);
    submitSignUp.addEventListener('click', sendAlertWithFeedbacks);
}