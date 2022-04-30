window.onload = function () {
    var validationMessageLogin = "";
    var emailMessageLogin = 'Email: ' + "This input is empty \n";
    var passwordMessageLogin = 'Password: ' + "This input is empty \n";
    var homeButton = document.getElementsByClassName('home');
    var signUp = document.getElementsByClassName('sign-up');
    var emailInput = document.getElementById('email');
    var emailFeedback = document.getElementById('email-feedback');
    var passwordInput = document.getElementById('password');
    var passwordFeedback = document.getElementById('password-feedback');
    var submitLogin = document.getElementById('login-submit');
    var forgotPassword = document.getElementById('forgot-password');

    function redirect(string) {
        window.location = string;
    }

    function validationEmail(email) {
        var emailConditions = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        return emailConditions.test(email);
    }

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

    function transformInvalidEmail() {
        if (!validationEmail(emailInput.value)) {
            emailFeedback.classList = 'feedback-invalid';
            emailInput.classList = 'input-invalid';
            emailMessageLogin = 'Email: ' + emailFeedback.innerText + '\n'
        } else {
            emailMessageLogin = 'Email: ' + emailInput.value + '\n';
        }
    }

    function resetTransformationsEmail() {
        emailFeedback.classList = 'feedback';
        emailInput.classList = '';
    }

    function transformInvalidPassword() {
        if (!validationTextNumber(passwordInput.value)) {
            passwordFeedback.classList = 'feedback-invalid';
            passwordInput.classList = 'input-invalid';
            passwordMessageLogin = 'Password: ' + passwordFeedback.innerText + '\n'
        } else {
            passwordMessageLogin = 'Password: ' + passwordInput.value + '\n';
        }
    }

    function resetTransformationsPassword() {
        passwordFeedback.classList = 'feedback';
        passwordInput.classList = '';
    }

    function showAlertWithFeedbacks() {
        validationMessageLogin = emailMessageLogin + passwordMessageLogin;
        alert(validationMessageLogin);
        connectWithServer();
    }

    function showAlertSentPassword() {
        alert('The data of your account was sended to your mail.');
        window.location.reload();
    }

    function formIsOk() {
        return validationEmail(emailInput.value) && validationTextNumber(passwordInput.value) &&
            passwordInput.value.length > 7;
    }

    function connectWithServer() {
        if (formIsOk()) {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' +
                    emailInput.value + '&password=' + passwordInput.value)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    alert(data.msg);
                });
        } else {
            alert('¡Check the inputs errors before continue!')
        }
    }
    for (var i = 0; i < homeButton.length; i++) {
        var button = homeButton[i];
        button.addEventListener('click', function () {
            redirect('index.html')
        });
    }

    for (var i = 0; i < signUp.length; i++) {
        var button = signUp[i];
        button.addEventListener('click', function () {
            redirect('sign-up.html')
        });
    }

    emailInput.addEventListener('blur', transformInvalidEmail);
    emailInput.addEventListener('focus', resetTransformationsEmail);
    passwordInput.addEventListener('blur', transformInvalidPassword);
    passwordInput.addEventListener('focus', resetTransformationsPassword);
    submitLogin.addEventListener('click', showAlertWithFeedbacks);
    forgotPassword.addEventListener('click', showAlertSentPassword);
}