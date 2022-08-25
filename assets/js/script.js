'use strict';

// responsive menu
let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.responsive-menu');

$(menu).click(()=>{
    $(menu).toggleClass('fa-times');
    $(navbar).toggleClass('active');
})


// work of partipications section slider
let workSwiper = new Swiper(".wop-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: -45,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        }
    }
});




// reviews section slider
let reviewSwiper = new Swiper(".review-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: -51,
      depth: 100,
      modifier: 3,
      slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 3,
        }
    }
});


// scroll arrow
const scrollArrow = document.getElementById('scroll-arrow-btn');

$(scrollArrow).click(()=>{
    $('html, body').animate({scrollTop: 0}, 1000);
})




