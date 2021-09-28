var typed = new Typed(".typing", {
    strings: ["Full-Stack Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Full-Stack Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
$(function(){
  var navbar = $('.header-inner');
  $(window).scroll(function(){
    if($(window).scrollTop() <=40){
      navbar.removeClass('navbar-scroll');
    }else{
      navbar.addClass('navbar-scroll');
    }
  });
});