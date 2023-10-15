const navMenu  = document.getElementById("nav-menu"),
     navToggle = document.getElementById("nav-toggle"),
     navClose = document.getElementById("nav-close");


if(navToggle){
    navToggle.addEventListener("click", ()=> {
        navMenu.classList.add("showMenu")

    });
}

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("showMenu")
    });
}

const navLink = document.querySelectorAll('.nav_links')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// =============== Skills ====================
const skillsContent = document.getElementsByClassName("skills_content");
const skillsHeader = document.querySelectorAll('.skills_header');


function toggleSkills(){
    let itemClass =this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills);
})


// ================== Qualification Tabs ====================

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabcontent => {
            tabcontent.classList.remove('qualification_active')
        });
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        });
        tab.classList.add('qualification_active')
    });
});


// ================== Portfolio Swiper =================


    let swiper = new Swiper(".swiper-container", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  


//   ==================== Scroll sections active link ================

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight; 
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


// ======================= Change background Header =======================

function scrollHeader() {
    const nav = document.getElementById('header');

    if(this.scrollY >= 80) nav.classList.add('scroll-header'); 
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);


// ====================== Show Scroll Up ===========================

function scrollUp(){
    const scrollUp = document.getElementById('scrollUp');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);


//====================== Dark Light Theme ==========================

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme ='uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.selectedIcon('selected-icon', getCurrentIcon())
})