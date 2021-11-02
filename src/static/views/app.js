export default class {
    constructor() {

    }

    signUp() {
        const form = document.querySelector('.form');
        const emailInput = document.getElementById('emailInput');
        const usernameInput = document.getElementById('usernameInput');
        const passwordInput = document.getElementById('passwordInput');
        const confirmpassInput = document.getElementById('confirmpassInput');

        const isNot_filled = (value) => value === '' ? false : true;

        const isBetween = (length, min, max) => length < min || length > max ? false : true;

        const emailValidation = (email) => {
            const code = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return code.test(email);
        };

        function showError(input, message) {
            const formField = input.parentElement;

            const errorAlert = formField.querySelector('small');
            errorAlert.textContent = message;
        }

        function disableErrror(input) {
            const formField = input.parentElement;

            const errorAlert = formField.querySelector('small');
            errorAlert.textContent = "";
        }

        function checkUsername() {
            let valid = false;

            const min = 6,
                max = 15;
            const username = usernameInput.value.trim();

            if (!isNot_filled(username)) {
                showError(usernameInput, "Digite seu nome de usuário");
            } else if (!isBetween(username.length, min, max)) {
                showError(usernameInput, `Sua entrada deve ter no mínimo ${min} caracteres e no máximo ${max} caracteres`);
            } else {
                errorDisable(usernameInput);
                valid = true;
            }
            return valid;
        }

        form.addEventListener('submit', e => {
            e.preventDefault();

            let usernameValid = checkUsername()

            let formValid = usernameValid;

            if (formValid) {
                alert("OK");
            }
        });
    }
}