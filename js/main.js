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

  AOS.init();

});