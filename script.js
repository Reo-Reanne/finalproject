// Example jQuery code for navigation animation
$(document).ready(function() {
  // Add smooth scrolling to anchor links
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Navigation bar animation
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });
});
