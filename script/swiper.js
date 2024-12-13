document.addEventListener('DOMContentLoaded', function () {
     new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true,
        },
        updateOnImagesReady: true,
        parallax: true,
    });

});