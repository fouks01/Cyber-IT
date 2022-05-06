const modal = () => {
    const modal = document.querySelector('.popup');
    // const buttons = document.querySelector('.navbar-buttons__sign-up');
    // const buttonSecond = document.querySelector('.hero-button__learn');
    // const buttonThird = document.querySelector('.traffic-main__button');
    // const buttonForth = document.querySelector('.framework-main__button');

    const modalBlock = modal.querySelector('.popup-content');
    const email = document.querySelectorAll('[type="email"]');
    const menu = document.querySelector('menu');
    const menuMobile = document.querySelector('.navbar__menu');



    const buttonAll = [];

    buttonAll.push(document.querySelector('.navbar-buttons__sign-up'));
    buttonAll.push(document.querySelector('.hero-button__learn'));
    buttonAll.push(document.querySelector('.traffic-main__button'));
    buttonAll.push(document.querySelector('.framework-main__button'));
    buttonAll.push(document.querySelector('.business-article__button'));


    let count = 0;
    let modalMove;

    const change = () => {

        if (menu.classList.contains('active-menu')) {
            modal.style.display = 'none';
        }
    };



    const modalAnimation = () => {
        count++;
        modalMove = requestAnimationFrame(modalAnimation);

        if (count < 51) {
            modalBlock.style.left = count + '%';
        } else {
            cancelAnimationFrame(modalMove);
        }
    };

    buttonAll.forEach((e) => {
        e.addEventListener('click', () => {
            if (screen.width > 767) {
                modalAnimation();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            count = 0;
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';

        }
    });

    menuMobile.addEventListener('click', change);


    email.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w0-9\-\.\_\!\~\*\'@]/gi, '');
        });
    });



};
modal();