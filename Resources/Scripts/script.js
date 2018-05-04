$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('nav').addClass('navScroll')
      }
      if ($(this).scrollTop() < 50) {
         $('nav').removeClass('navScroll')
      }
   });
});

