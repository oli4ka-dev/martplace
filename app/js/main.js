$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "15px",
        readOnly: true
      });

      $('.weekly__slide-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ' <button class="slick-arrow slick-prev"> <div class="icon-angle-left"></div></button>',
        nextArrow: ' <button class="slick-arrow slick-next"> <div class="icon-angle-right"></div></button>',
      });
      

      $('.followers__slide-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // variableWidth: true,
        prevArrow: ' <button class="slick-arrow slick-prev"> <div class="icon-angle-left"></div></button>',
        nextArrow: ' <button class="slick-arrow slick-next"> <div class="icon-angle-right"></div></button>',
        responsive: [
          {
            breakpoint: 1025,
            settings: {
            slidesToShow: 2,
           slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
      

      $('.feedback__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
        slidesToScroll: 1,
            }
          }
        ]
     
      });

      $('select').styler();



      $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
      });

      $(' .header__btn-menu').on('click', function(){
        $('.header__box, .header__avatar-user__menu').toggleClass('active');
      });


     

      var mixer = mixitup('.newest__inner-items');
});