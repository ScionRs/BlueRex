$(document).ready(function() {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('header__menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('header__menu-active');
        })
    })

    const aboutBtn = document.querySelectorAll(".about__tab");
    const aboutItems = document.querySelectorAll(".about__item");
    const portfolioBtn = document.querySelectorAll(".portfolio__tab");
    const portfolioItems = document.querySelectorAll(".portfolio__items");
    aboutBtn.forEach(onAboutTabClick);
    portfolioBtn.forEach(onPortfolioTabClick);
    function onAboutTabClick(item) {
        item.addEventListener("click", function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);
            console.log(tabId);

            if (!currentTab.classList.contains('about__tab-active')) {
                aboutBtn.forEach(function (item) {
                    item.classList.remove('about__tab-active');
                })

                aboutItems.forEach(function (item) {
                    item.classList.remove('about__item-active');
                })

                currentBtn.classList.add('about__tab-active');
                currentTab.classList.add('about__item-active');
            }
        });
    }
    function onPortfolioTabClick(item) {
        item.addEventListener("click", function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);
            console.log(tabId);

            if (!currentTab.classList.contains('portfolio__tab-active')) {
                portfolioBtn.forEach(function (item) {
                    item.classList.remove('portfolio__tab-active');
                })

                portfolioItems.forEach(function (item) {
                    item.classList.remove('portfolio__items-active');
                })

                currentBtn.classList.add('portfolio__tab-active');
                currentTab.classList.add('portfolio__items-active');
            }
        });
    }
})
