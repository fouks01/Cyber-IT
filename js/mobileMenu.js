const mobileMenu = () => {
    const menu = document.querySelector('menu');
    const menuMobile = document.querySelector('.navbar__menu');
    const buttons = document.querySelector('.navbar-buttons__sign-up');




    const handleMenu = () => {
        menuMobile.classList.toggle('menu-button--active');
        if (menu.classList.toggle('active-menu')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    };


    const change = () => {

        if (menu.classList.contains('active-menu')) {
            menu.classList.remove('active-menu');
        }
    };

    buttons.addEventListener('click', change);

    menuMobile.addEventListener('click', (e) => {
        e.preventDefault();
        if (screen.width < 769) {
            handleMenu();
        }
    });
};

mobileMenu();