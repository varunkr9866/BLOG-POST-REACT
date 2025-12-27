/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('root');
    const headerHeight = mainNav.offsetHeight;

    // Make sure navbar is visible initially
    mainNav.classList.add('is-visible');

    window.addEventListener('scroll', () => {
        const currentTop = window.pageYOffset;

        // Scrolling UP
        if (currentTop < scrollPos) {
            mainNav.classList.add('is-visible');

            if (currentTop > headerHeight) {
                mainNav.classList.add('is-fixed');
            } else {
                mainNav.classList.remove('is-fixed');
            }

        // Scrolling DOWN
        } else {
            mainNav.classList.remove('is-visible');

            if (currentTop > headerHeight) {
                mainNav.classList.add('is-fixed');
            }
        }

        scrollPos = currentTop;
    });
});
