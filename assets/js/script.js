// Navegação mobile

const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close')
const nav = document.getElementsByClassName('nav')

openBtn.onclick = () => {
    nav[0].style.display = 'flex'
}

closeBtn.onclick = () => {
    nav[0].style.display = 'none'
}


console.log(nav)

// Mudança de background ao rolar a página.

const headerLight = document.getElementsByClassName('header-light');
const logo = document.querySelector('.logo-text')
const page = document.querySelector('body')
const openMenu = document.querySelector('.open-menu')

page.onscroll = () => {
        if (window.scrollY > 10){
            headerLight[0].style.background = 'var(--brand-green)'
            logo.setAttribute('src', '/assets/img/logo-dark.svg')
            openMenu.setAttribute('src', '/assets/img/openwhite.svg')
            
        } else{
            headerLight[0].style.background = 'none'
            logo.setAttribute('src', '/assets/img/logo-light.svg')
            openMenu.setAttribute('src', '/assets/img/opengreen.svg')
        }
    
}

console.log(img)