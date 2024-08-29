(function ($) {

  "use strict";

  $('.color-mode').click(function () {
    $('body').toggleClass('dark-mode');

    if ($('body').hasClass('dark-mode')) {
      $('.color-mode-icon').removeClass('fa-moon').addClass('fa-sun');
      $('.color-mode-text').text('Cambiar a modo claro');
    } else {
      $('.color-mode-icon').removeClass('fa-sun').addClass('fa-moon');
      $('.color-mode-text').text('Cambiar a modo oscuro');
    }
  });

  $(".navbar").headroom();

  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });


})(jQuery);