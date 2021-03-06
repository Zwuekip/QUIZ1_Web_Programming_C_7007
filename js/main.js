/* Menu Show */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/* Scroll Reval Animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* Scroll HOME */
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__text', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/* Scroll Profile */
sr.reveal('.profile__img', {delay: 500})
sr.reveal('.profile__subtitle', {delay: 300})
sr.reveal('.profile__nrp', {delay: 400})
sr.reveal('.profile__text', {delay: 500})
sr.reveal('.profile__social-icon', {delay: 600, interval: 200})

/* Scroll Hometown */
sr.reveal('.hometown__subtitle', {})
sr.reveal('.hometown__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.hometown__img', {delay: 400})
sr.reveal('.hometown__text', {delay: 500})

/* Scroll Food and Tourist*/
sr.reveal('.foodtourist__img', {delay: 100})
