$('.text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4500,
    speed:4500,
    prevArrow: '<button class="navs next"><i class="bi bi-arrow-left"></i></button>',
    nextArrow: '<button class="navs previous"><i class="bi bi-arrow-right"></i></button>',
    pauseOnHover:false,
    dots: false,
    margin: 20,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });  

  