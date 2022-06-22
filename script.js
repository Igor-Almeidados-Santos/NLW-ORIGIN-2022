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

// Mudança de background ao scrolar a página.

const headerLight = document.getElementsByClassName('header-light');
const img = document.('.headerlight')
const page = document.querySelector('body')

page.onscroll = () => {
        if (window.scrollY > 10){
            headerLight[0].style.background = 'var(--brand-green)'
            console.log(window.scrollY)
        } else{
            headerLight[0].style.background = 'none'
        }
    
}

console.log(img)