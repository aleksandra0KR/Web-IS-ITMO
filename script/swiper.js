// Инициализация Swiper слайдера после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
     new Swiper('.swiper-container', {
        slidesPerView: 1, // Количество слайдов, отображаемых одновременно
        loop: true, // Включение бесконечного цикла
        centeredSlides: true, // Центрирование активного слайда
        navigation: {
            nextEl: '.swiper-button-next', // Элемент для перехода к следующему слайду
            prevEl: '.swiper-button-prev', // Элемент для перехода к предыдущему слайду
        },
    });
});
