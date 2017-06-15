$(function() {
  $('a[href*="#"]:not([href="#"]:not([href="#closer-look-desktop"]:not([href="#logo-carousel"])').click(function(event) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
  $('#closer-look,#closer-look-desktop,#logo-carousel').carousel({
    pause: true,
    interval: false
    });

  // interval is in milliseconds. 1000 = 1 second - so 1000 * 10 = 10 seconds
  $('.carousel').carousel({
    interval: 1000 * 8
  });

});