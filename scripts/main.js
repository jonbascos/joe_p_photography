const hamburger = document.querySelector('#hamburger')
const navUL = document.querySelector('.nav-ul')


console.log('JS loaded')

hamburger.addEventListener('click', () => { 
    navUL.classList.toggle('show')
})