const hamburger = document.getElementById('mobileNav')
const mobileNavMenu = document.getElementById('mobileNavMenu')
const hamburgerIcon = document.querySelector('.fa-bars')
const mobileNavOpen = document.querySelector('#mobileNavOpen')
const navSelector = document.querySelector('#navSelector')

hamburger.addEventListener('click', () => { 
    if(mobileNavMenu.style.display === 'none') {
        mobileNavMenu.style.display = 'flex'
        hamburgerIcon.style.display = 'none'

    } else {
        mobileNavMenu.style.display = 'none'
        hamburgerIcon.style.display = 'block'
    }
})