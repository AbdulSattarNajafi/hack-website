'use strict';
// ========= Menu
const menu = document.querySelector('.header-menu');
const menuItems = document.querySelectorAll('.menu-item');
const menuBtn = document.querySelector('.hamburger');

menuBtn.addEventListener('click', showHideMenu);
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        const activeMenu = document.querySelector('.menu-item.active');
        activeMenu.classList.remove('active');
        item.classList.add('active');
        hideMenu();
    });
});

function showHideMenu() {
    document.body.classList.toggle('overflow-hidden');
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
}

function hideMenu() {
    document.body.classList.remove('overflow-hidden');
    menu.classList.remove('open');
    menuBtn.classList.remove('open');
}

// ========= Who We Are Slider
$(document).ready(function () {
    $('#who-we-are-slider').owlCarousel({
        autoWidth: false,
        loop: true,
        dots: true,
        autoplay: true,
        margin: 20,
        items: 1,
        lazyLoad: true,
        autoplayTimeout: 7500,
        autoplayHoverPause: true,
    });
});

// ========= Tools Slider
$(document).ready(function () {
    $('#tools-slider').owlCarousel({
        autoWidth: false,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        margin: 24,
        items: 1,
        lazyLoad: true,
        autoplayTimeout: 7500,
        autoplayHoverPause: true,
        navText: [
            '<img src="./assets/icons/slider-left.svg" alt="icon">',
            '<img src="./assets/icons/slider-right.svg" alt="icon">',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2,
            },
            992: {
                items: 3.2,
            },
        },
    });
});

// ========= Tech Stack Slider
$(document).ready(function () {
    $('#tech-stack-slider').owlCarousel({
        autoWidth: false,
        loop: true,
        dots: true,
        autoplay: true,
        margin: 20,
        items: 1,
        lazyLoad: true,
        autoplayTimeout: 7500,
        autoplayHoverPause: true,
    });
});

// ========= Testimonial Slider
$(document).ready(function () {
    $('#testimonials-slider').owlCarousel({
        autoWidth: false,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        margin: 20,
        items: 1,
        lazyLoad: true,
        autoplayTimeout: 7500,
        autoplayHoverPause: true,
        dotClass: 'testimonials-dot',
        navText: [
            '<img src="./assets/icons/slider-left.svg" alt="icon">',
            '<img src="./assets/icons/slider-right.svg" alt="icon">',
        ],
    });
});

// ========== Footer Copyright Year
const footerYear = document.getElementById('full-year');
footerYear.textContent = new Date().getFullYear();
