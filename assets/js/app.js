const menuBtn = document.querySelector('.menu__btn');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__links');

const changeBtn = () => {
    if (menuBtn.classList.contains('bx-menu')) {
        menuBtn.classList.replace('bx-menu', 'bx-x-circle');
    } else {
        menuBtn.classList.replace('bx-x-circle', 'bx-menu');
    }
}


menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('menu__show');
    document.body.classList.toggle('no__scroll');
    changeBtn();
})

navLinks.forEach((e) => {
    e.addEventListener('click', ()=>{
        navMenu.classList.remove('menu__show');
        document.body.classList.remove('no__scroll');
        changeBtn();
    })
})