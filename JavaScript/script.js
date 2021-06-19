
  // Get the current year for the copyright
  $("#year").text(new Date().getFullYear());

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }


  /* Mobile navigation */
  $('.nav-icon-js').click(function () {
    var nav = $('.main-nav-js');
    var icon = $('.nav-icon-js i');

    nav.slideToggle(200);

    if (icon.hasClass('fas fa-bars')) {
      icon.addClass('fa fa-times');
      icon.removeClass('fas fa-bars');
    } else {
      icon.addClass('fas fa-bars');
      icon.removeClass('fa fa-times');
    }
  });
