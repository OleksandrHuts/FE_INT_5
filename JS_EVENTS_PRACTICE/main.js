// email should be longer than 5 chars, and it should include @, .
// password should be longer than 10 chars, one Capital letter and one spec char (*,&,!)
// checkbox should be ticked
// let FORM_HAS_ERROS = true;

//Form events:
// input
// change
// blur
// focus
// submit

function setStyleVal(selector, prop, val) {
    document.querySelector(selector).style[prop] = val;
}

const errors = {
    email: {
        length: true,
        chars: true
    },
    password: true,
    checkbox: true
}

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})");

document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.querySelector('#email-input');
    const passwordInput = document.querySelector('#password-input');
    const checkboxInput = document.querySelector('#checkbox-input');
    const form = document.querySelector('#my-form');

    form.addEventListener('change', () => {
        const emailHasError = errors.email.chars || errors.email.length;
        const passwordHasError = errors.password;
        const checkboxHasError = errors.checkbox;

        if(emailHasError || passwordHasError || checkboxHasError) {
            document.querySelector('#submit-button').setAttribute('disabled', 'disabled');
            return false;
        }

        document.querySelector('#submit-button').removeAttribute('disabled');
    });

    form.addEventListener('submit', event => {
        event.preventDefault()
        console.log('form submit!!!!');
        
    })

    emailInput.addEventListener('focus', () => {
        console.log('Focus event!!!');
        
    })

    emailInput.addEventListener('input', (event) => {
        console.log('Input event!!!!!');
        
        //Length check
        //Fail
        if (event.target.value.length < 5) {
            setStyleVal('#emailHelp', 'display', 'block');

            document.querySelector('#emailHelp').textContent = `You need to add ${5 - event.target.value.length} more chars`
            errors.email.length = true
        } else {
            // Pass
            setStyleVal('#emailHelp', 'display', 'none');
            errors.email.length = false
        }
        // Chars check
        if (event.target.value.includes('@') && event.target.value.includes('.')) {
            // pass
            setStyleVal('#emailHelp2', 'display', 'none');
            errors.email.chars = false;
        } else {
            // fail
            setStyleVal('#emailHelp2', 'display', 'block');
            document.querySelector('#emailHelp2').textContent = `It should include @ and .`;
            errors.email.chars = true;
        }
    });

    passwordInput.addEventListener('input', event => {
        if (strongRegex.test(event.target.value)) {
            //pass
            setStyleVal('#passwordHelp', 'display', 'none');
            errors.password = false
        } else {
            //fail
            setStyleVal('#passwordHelp', 'display', 'block');
            errors.password = true
        }
    })
    checkboxInput.addEventListener('input', event => {
        if(event.target.checked) {
            //pass
            setStyleVal('#checkboxHelp', 'display', 'none');
            errors.checkbox = false;
        } else {
            //fail
            setStyleVal('#checkboxHelp', 'display', 'block');
            errors.checkbox = true;
        }
    })
});