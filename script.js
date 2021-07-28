const NAVBAR = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');

window.addEventListener('scroll', () => {
    if (scrollY > 0) {
        NAVBAR.firstElementChild.classList.remove('py-4');
        NAVBAR.firstElementChild.classList.add('py-2');

    }
    else {
        NAVBAR.firstElementChild.classList.add('py-4');
        NAVBAR.firstElementChild.classList.remove('py-2');
    }
});

navLinks.forEach((link) => {
    link.addEventListener('click',function() {
        removeActiveClass(navLinks);
        link.classList.add('active');
        navbarToggler.click();
    })
});

function removeActiveClass(a) {
    a.forEach((elem) => {
        elem.classList.remove('active');
    })
}
