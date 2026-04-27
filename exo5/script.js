let theme = document.querySelector('#theme');
let body = document.querySelector('body');
console.log(body)
theme.addEventListener('click', () => {
    body.classList.toggle('sombre');
    body.classList.toggle('claire');
})