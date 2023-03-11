// your script file for adding your own jquery
$(function () {
  // Your Code from here on down. Don't delete that line above!

  $('.my-slick').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
  
    autoplaySpeed: 2000,
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

$('.volunteer-tab h2').click(function() {
  $('.volunteer-content').toggleClass('hide')
  $('.volunteer-tab').css(
      'background', '#D7E9A9'
  )
  $('.member-tab').css(
      'background', '#fff'
  )
  $('.member-content').toggleClass('hide')
})
$('.member-tab h2').click(function() {
  $('.volunteer-content').toggleClass('hide')
  $('.member-tab').css(
      'background', '#FEC5A0' 
  )
  $('.volunteer-tab').css(
      'background', '#fff'
  )
  $('.member-content').toggleClass('hide')
})

let timer=0;
window.addEventListener('load', (event) => {
  let intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function() { entry.target.classList.add('up'); },timer);
        timer +=50;
        intersectionObserver.unobserve(entry.target);
        setTimeout(function(){ timer = 0;}, 1000)
      }
    });
  });

  document.querySelectorAll('.animate').forEach(obj =>{
    intersectionObserver.observe(obj);
    });
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 1000 ||
document.documentElement.scrollTop > 1000
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}



