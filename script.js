let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
    })
}

document.getElementById('menu-icon').addEventListener('click', function () {
        document.querySelector('.navbar').classList.toggle('active');
});
