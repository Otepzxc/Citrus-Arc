
/*===== SCROLL SECTIONS ACTIVE LINK =====*/
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

// dark theme.js
document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('theme-button');
    const body = document.body;

    // Check for saved theme preference
    const theme = localStorage.getItem('theme');
    if (theme) {
        body.classList.add(theme);
        // Toggle moon/sun icon based on the theme
        if (theme === 'dark-theme') {
            themeButton.classList.add('bx-sun');
            themeButton.classList.remove('bx-moon');
        } else {
            themeButton.classList.add('bx-moon');
            themeButton.classList.remove('bx-sun');
        }
    }

    themeButton.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
            // Change icon to sun when switching to light theme
            themeButton.classList.add('bx-moon');
            themeButton.classList.remove('bx-sun');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            // Change icon to moon when switching to dark theme
            themeButton.classList.add('bx-sun');
            themeButton.classList.remove('bx-moon');
        }
    });
});


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})




