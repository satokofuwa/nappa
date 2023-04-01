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
  $('.nav_toggle').on('click',function(){
    $('.nav_toggle, .nav, .gnav, ul, li,.btn.btn-primary.rounded-pill.sp-only, a.news-title').toggleClass('show');
  });
  $('li.nav_menu_li a').on('click',function(){
    $('.nav_toggle, .nav, .gnav, ul, li,.btn.btn-primary.rounded-pill.sp-only, a.news-title').removeClass('show');
  });
  Fancybox.bind('[data-fancybox="gallery"]', {
  
 });
  