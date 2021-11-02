import absview from "./absview.js";

export default class extends absview {
    constructor(params) {
        super(params);
        this.setTitle("Join");
    }

    async getHtml() {
        return `
        <div class="signupFrm">
        <div class="wrapper">
        <form action="" class="form">
          <h1 class="title">Sign up</h1>
    
          <div class="inputContainer">
            <input type="text" class="input" id="emailInput" placeholder="a">
            <label for="" class="label">Email</label>
            <small></small>
          </div>
    
          <div class="inputContainer">
            <input type="text" class="input" id="usernameInput" placeholder="a">
            <label for="" class="label">Username</label>
            <small></small>
          </div>
    
          <div class="inputContainer">
            <input type="text" class="input" id="passwordInput" placeholder="a">
            <label for="" class="label">Password</label>
            <small></small>
          </div>
    
          <div class="inputContainer">
            <input type="text" class="input" id="confirmpassInput" placeholder="a">
            <label for="" class="label">Confirm Password</label>
            <small></small>
          </div>

          <h3><a href="#">Already account?</a></h3>
          <input type="submit" class="submitBtn" value="Sign up">
        </form>
        </div>
      </div>
        `
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

        function checkEmail() {
            let valid = false;
            const email = emailInput.value.trim();

            let listUser = []

            let userValid = {
                email: ''
            }

            listUser = JSON.parse(localStorage.getItem('listUser'));

            listUser.forEach((item) => {
                if (emailInput.value == item.emailUser) {

                    userValid = {
                        email: item.emailUser
                    }
                }
            });

            if (!isNot_filled(email)) {
                showError(emailInput, "Digite seu endereço e-mail");
            } else if (!emailValidation(email)) {
                showError(emailInput, "Enderço inválido");
            } else if (emailInput.value == userValid.email) {
                showError(emailInput, "Email já cadastrado");
            }
            else {
                errorDisable(emailInput);
                valid = true;
            }
            return valid;
        }

        function checkUsername() {
            let valid = false;

            const min = 6,
                max = 15;
            const username = usernameInput.value.trim();

            let listUser = []

            let userValid = {
                user: ''
            }

            listUser = JSON.parse(localStorage.getItem('listUser'));

            listUser.forEach((item) => {
                if (usernameInput.value == item.userName) {

                    userValid = {
                        user: item.userName
                    }
                }
            });

            if (!isNot_filled(username)) {
                showError(usernameInput, "Digite seu nome de usuário");
            } else if (!isBetween(username.length, min, max)) {
                showError(usernameInput, `Sua entrada deve ter no mínimo ${min} caracteres e no máximo ${max} caracteres`);
            } else if (usernameInput.value == userValid.user) {
                showError(formUser, "Usuário já cadastrado");
            } else {
                disableErrror(usernameInput);
                valid = true;
            }
            return valid;
        }

        function checkPassword() {
            let valid = false;
            const min = 8,
                max = 16;
            const password = passwordInput.value.trim();

            if (!isNot_filled(password)) {
                showError(passwordInput, "Digite sua senha");
            } else if (!isBetween(password.length, min, max)) {
                showError(passwordInput, "Sua senha deve ter no mínimo 8 caracteres e no máximo 16");
            } else {
                errorDisable(passwordInput);
                valid = true;
            }
            return valid;
        }

        function checkConfirmpass() {
            let valid = false;
            const password = passwordInput.value.trim();
            const confirmPassword = confirmpassInput.value.trim();

            if (!isNot_filled(confirmPassword)) {
                showError(confirmpassInput, "Confirme sua senha");
            } else if (confirmPassword !== password) {
                showError(confirmpassInput, "As senhas não estão iguais");
            } else {
                errorDisable(confirmpassInput);
                valid = true;
            }
            return valid;
        }

        form.addEventListener('submit', e => {
            e.preventDefault();


            let usernameValid = checkUsername(),
                emailValid = checkEmail(),
                passwordValid = checkPassword(),
                confirmPassValid = checkConfirmpass()

            let formValid = emailValid && usernameValid && passwordValid && confirmPassValid;

            if (formValid) {
                let listUser = JSON.parse(localStorage.getItem('listUser') || []);

                listUser.push(
                    {
                        emailUser: emailInput.value,
                        userName: usernameInput.value,
                        passWord: passwordInput.value,
                        confirmPass: confirmpassInput.value
                    }
                )

                localStorage.setItem('listUser', JSON.stringify(listUser));
            }
        });
    }
}