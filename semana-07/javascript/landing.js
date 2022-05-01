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

window.onload = function () {
    var contactNameInput = document.getElementById('contact-form-name');
    var contactNameFeedback = document.getElementById('contact-name-feedback');
    var contactEmailInput = document.getElementById('contact-form-email');
    var contactEmailFeedback = document.getElementById('contact-email-feedback');
    var contactMessageInput = document.getElementById('contact-form-message');
    var contactMessageFeedbak = document.getElementById('contact-message-feedback');

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

    function transformInvalidContactName() {
        if (!validationHasText(contactNameInput.value) || contactNameInput.length < 3 ||
            validationHasNumber(contactNameInput.value)) {
            contactNameFeedback.classList = 'feedback-invalid';
            contactNameInput.classList = 'input-invalid';
        }
    }

    function resetInvalidContactName() {
        contactNameFeedback.classList = 'feedback';
        contactNameInput.classList = '';
    }
    function transformInvalidContactEmail() {
        if (!validationEmail(contactEmailInput.value)) {
            contactEmailFeedback.classList = 'feedback-invalid';
            contactEmailInput.classList = 'input-invalid';
        }
    }

    function resetInvalidContactEmail() {
        contactEmailFeedback.classList = 'feedback';
        contactEmailInput.classList = '';
    }

    function transformInvalidContactMessage() {
        if (!validationHasText(contactMessageInput.value) || !validationHasNumber(contactMessageInput.value)) {
            contactMessageFeedbak.classList = 'feedback-invalid';
            contactMessageInput.classList = 'input-invalid';
        }
    }

    function resetInvalidContactMessage() {
        contactMessageFeedbak.classList = 'feedback';
        contactMessageInput.classList = '';
    }

    contactNameInput.addEventListener('focus', resetInvalidContactName);
    contactNameInput.addEventListener('blur', transformInvalidContactName);
    contactEmailInput.addEventListener('blur', transformInvalidContactEmail);
    contactEmailInput.addEventListener('focus', resetInvalidContactEmail);
    contactMessageInput.addEventListener('blur', transformInvalidContactMessage);
    contactMessageInput.addEventListener('focus', resetInvalidContactMessage);
}