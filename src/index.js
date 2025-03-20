import 'boxicons';

const container = document.querySelector('.container')
const logBtn = document.querySelector('.login-btn')
const regBtn = document.querySelector('.register-btn')

regBtn.addEventListener('click', () => {
    container.classList.add('active')
});
logBtn.addEventListener('click', () => {
    container.classList.remove('active')
});