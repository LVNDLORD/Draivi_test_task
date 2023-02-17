'use strict';

const burger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(e =>
    e.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

onscroll = () => {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
};
