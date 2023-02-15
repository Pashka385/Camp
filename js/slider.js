$(document).ready(function () {
    $('.slider1').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 900,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      arrows:false,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });
});