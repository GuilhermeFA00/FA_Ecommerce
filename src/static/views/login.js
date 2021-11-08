import absview from "./absview.js";

export default class extends absview {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {
        return `
        <div class="signupFrm">
        <div class="wrapper">
        <form action="" class="form">
          <h1 class="title">Sign in</h1>
    
          <div class="inputContainer">
            <input type="text" class="input" id="emailInput" placeholder="a">
            <label for="" class="label">Email</label>
            <small></small>
          </div>
    
          <div class="inputContainer">
            <input type="text" class="input" id="passwordInput" placeholder="a">
            <label for="" class="label">Password</label>
            <small></small>
          </div>

          <h3><a href="/join" data-link>Still don't have an account?Sign up!</a></h3>
          <input type="submit" class="submitBtn" value="Sign in">
        </form>
        </div>
      </div>
        `
    }

    userLogin() {
        const form = document.querySelector('.form');
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');

        const isNot_filled = (value) => value === '' ? false : true;

        function showError(input, message) {
            const formField = input.parentElement;

            const errorAlert = formField.querySelector('small');
            errorAlert.textContent = message;
        }

        function disableError(input) {
            const formField = input.parentElement;

            const errorAlert = formField.querySelector('small');
            errorAlert.textContent = "";
        }

        function checkEmail() {
            let valid = false;
            const email = emailInput.value.trim();

            if (!isNot_filled(email)) {
                showError(emailInput, "Digite seu endereço e-mail");
            } else {
                disableError(emailInput);
                valid = true;
            }
            return valid;
        }

        function checkPassword() {
            let valid = false;
            const password = passwordInput.value.trim();

            if (!isNot_filled(password)) {
                showError(passwordInput, "Digite sua senha");
            } else {
                disableError(passwordInput);
                valid = true;
            }
            return valid;
        }

        form.addEventListener('submit', e => {
            e.preventDefault();

            let emailValid = checkEmail();
            let passwordValid = checkPassword();

            let formValid = emailValid && passwordValid;

            if (formValid) {

                let listUser = []

                let userValid = {
                    email: '',
                    pw: ''
                }

                listUser = JSON.parse(localStorage.getItem('listUser'));

                listUser.forEach((item) => {
                    if (item.length > 1) {
                        if (emailInput.value == item.emailUser && passwordInput == item.passWord) {

                            userValid = {
                                email: item.emailUser,
                                pw: item.passWord
                            }
                        }
                    } else {
                        userValid = {
                            email: item.emailUser,
                            pw: item.passWord
                        }
                    }
                });

                if (emailInput.value == userValid.email && passwordInput.value == userValid.pw) {
                    alert("Ok");

                    let mathRandom = Math.random().toString(16).substr(2)
                    let token = mathRandom + mathRandom

                    localStorage.setItem('token', token)
                    localStorage.setItem('userEnter', JSON.stringify(userValid))
                } else {
                    let errorAlert = document.querySelector('.signupFrm h3');
                    let updateHTML = `
                <h3>Email ou senha inválidos</h3>
                `;

                    errorAlert.innerHTML = updateHTML;
                }
            }
        });
    }
}