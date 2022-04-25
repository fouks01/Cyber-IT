$(document).ready(function () {
  $(".newsletter-main__form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        newsletter: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
  // const menuButton = document.querySelector(".navbar__link");
  // menuButton.addEventListener('click', function () {
  //   console.log('Клик по кнопке меню');
  //   document
  //     .querySelector('.navbar__sector')
  //     .classList.toggle('.navbar__sector--visible');
  // });
  AOS.init();
});