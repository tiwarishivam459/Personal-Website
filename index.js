//Responsive Personal Portfolio Website using HTML CSS and JavaScript - Theme Customization - 3:57:48
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

/*=============== SHOW MENU ===============*/
function toogleBtnAdd() {
    navMenu.classList.add('show-menu')
}
if (navToggle) {
    navToggle.addEventListener('click', toogleBtnAdd)
}

/*============== HIDE MENU ===============*/
function toogleBtnRemove() {
    navMenu.classList.remove('show-menu')
}
if (navClose) {
    navClose.addEventListener('click', toogleBtnRemove)
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav-link');
function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.querySelector('#header');
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener("scroll", scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector('#theme-button');
const themeModal = document.querySelector(".customize-theme");

function openThemeModal() {
    themeModal.style.display = 'grid';
}
function closeThemeModal(e) {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

/*===== FONTS =====*/
const fontSizes = document.querySelectorAll('.choose-size span');
function removeSizeSelector(){
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '12px';
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '14px';
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '18px';
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})

/*===== THEME BACKGROUNDS =====*/
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

function changeBG() {
    let root = document.querySelector('body').style.backgroundColor;
    root.style.setProperty('background-color', lightColorLightness);
    root.style.setProperty('background-color', whiteColorLightness);
    root.style.setProperty('background-color', darkColorLightness);
}

function  changeThemeOne() {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
}

function changeThemeTwo() {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
}

function changeThemeThree() {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
}

Bg1.addEventListener('click', changeThemeOne)
Bg2.addEventListener('click', changeThemeTwo);
Bg3.addEventListener('click', changeThemeThree);
