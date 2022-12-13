// Mobile-Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// showcase slider
$('.showcase-slider').slick({
    dots: false,
    // infinite: false,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    // autoplay:true,
    autoplaySpeed: 1400,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



// testimonial slider
$('.testimonial-slider').slick({
    dots: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1400,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


// history-slider
$('.history-slider').slick({
    dots: false,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1400,
    fade: true,
    cssEase: 'linear',
  });


// for-you-slider
$('.for_you_slide').slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});