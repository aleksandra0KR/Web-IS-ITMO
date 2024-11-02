(function() {
    const startTime = performance.now();

    window.addEventListener('load', () => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;
        const footer = document.querySelector('footer');
        const loadTimeElement = document.createElement('p');
        loadTimeElement.classList.add('footer__contact');
        loadTimeElement.textContent = `Время загрузки страницы: ${loadTime.toFixed(2)} мс`;
        footer.appendChild(loadTimeElement);
    });

    const currentPage = document.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.nav__link');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }

        item.addEventListener('mouseover', () => {
            item.style.color = "lch(50% 50 10)";
        });

        item.addEventListener('mouseout', () => {
            item.style.color = '';
        });
    });
})();
