// your script file for adding your own jquery
$(function () {
  // Your Code from here on down. Don't delete that line above!

  $('.my-slick').slick({
    dots: true,
    infinite: true,
    speed: 900,
    arrows: true,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
  
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })

  // End of Your Code . Don't delete that line below!!
})

$(document).ready(function(){
  $('.slideshow').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});