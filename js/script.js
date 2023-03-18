$(window).on('load',function(){
  AOS.init();
  })
  $(function(){
    $(".inview").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      }
    });
  });
  $('.slider').slick({
    
    infinite: true, 
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  });