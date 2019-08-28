// Sign up Form Validation
const signUpForm = document.getElementById('signup');
signUpForm.addEventListener('submit', (e) => {
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'you should Fill All fields';
    errorMessage.style.color = 'red';
    signUpForm.appendChild(errorMessage);
    e.preventDefault();
  }
  if (password !== confirmPassword) {
    const PWerrorMessage = document.createElement('p');
    PWerrorMessage.textContent = 'password not equal to confirmPassword';
    PWerrorMessage.style.color = 'red';
    signUpForm.appendChild(PWerrorMessage);
    e.preventDefault();
  }
});
