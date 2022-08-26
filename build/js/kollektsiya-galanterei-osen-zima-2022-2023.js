
const swiperDetail = new Swiper(".swiper-detail", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperPhoto = new Swiper(".swiper-photo", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const burger = document.getElementById('burger');

burger.addEventListener('click', function (){
    let menu = document.getElementsByClassName('osen-zima-nav');
    this.classList.toggle('open');
    menu[0].classList.toggle('open')

})