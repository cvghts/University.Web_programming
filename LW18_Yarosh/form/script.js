const form = document.getElementById('login-form');
const inputEmail = document.getElementById('user-email');
const inputPassword = document.getElementById('user-password');
const btn = document.querySelector('.btn-primary');

// email
const regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// password
const regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!?&])[A-Za-z\d@$#!?&]{7,}$/;



let isValidEmail;
let isValidPassword;

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!isValidEmail && !isValidPassword) {
    btn.disabled = true;
  } else if (isValidEmail && isValidPassword) {
    btn.disabled = false;
  }

  const object = {
    email: inputEmail.value,
    password: inputPassword.value
  };

  console.log(object);

  inputEmail.value = '';
  inputPassword.value = '';
});

inputEmail.addEventListener('blur', () => {
  isValidEmail = regexpEmail.test(inputEmail.value);
  forBlurField(isValidEmail, inputEmail);
});

inputPassword.addEventListener('blur', () => {
  isValidPassword = regexpPassword.test(inputPassword.value);
  forBlurField(isValidPassword, inputPassword);
});

function forBlurField(isValid, input) {
  if (!isValid) {
    input.setCustomValidity("Invalid field.");
    btn.disabled = true;
  } else {
    input.setCustomValidity('');
    btn.disabled = false;
  }
}