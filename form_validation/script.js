const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');
const inputs = [username, password, password2, email];

const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkLength = (input, min) => {
    if(input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} should be min. ${min}`);
    }
}

const checkPassword = (pass, pass2) => {
    if(pass.value !== pass2.value) {
        showError(password2, 'Pass should be the same')
    }
}

const checkForm = inputs => {
    inputs.forEach(el => {
        if(el.value === '') {
            showError(el, el.placeholder);
        } else {
            clearError(el)
        }
    })
}

const checkEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(email.value)) {
        clearError(email);
    } else {
        showError(email, 'Improper email')
    }
}

sendBtn.addEventListener('click', event => {
    event.preventDefault();

    checkForm(inputs);
    checkLength(username, 3);
    checkLength(password, 8);
    checkPassword(password, password2);
    checkEmail(email);
    checkErrors();
})

const checkErrors = () => {
    const allIFormElements = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allIFormElements.forEach(el => {
        if(el.classList.contains('error')) {
            errorCount++;
        }
    });

    if(errorCount === 0) {
        popup.classList.add('show-popup');
    }

}

clearBtn.addEventListener('click', event => {
    event.preventDefault();

    inputs.forEach(el => {
        el.value = '';
        clearError(el);
    })
})