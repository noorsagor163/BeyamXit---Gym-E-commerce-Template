$(function () {

  "use strict";

  // =================== Preloader Js Start ===============

  $(window).on('load', function () {
    $(".preloader").delay(500).fadeOut(500);
  });

  // =================== Preloader Js End ===============

  //================= Sticky Menu Js Start ================

	$(window).on("scroll", function() {
		var scrolling = $(this).scrollTop();
		if (scrolling >= 80) {
			$(".navbar").addClass("sticky");
		}
		else {
			$(".navbar").removeClass("sticky");
		}
	});

	//================= Sticky Menu Js End ================

  // ============= Closes responsive menu when a scroll link is clicked Start =========

  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  // ============= Closes responsive menu when a scroll link is clicked End =========

  // ================== Search Hide/Show Js Start ==================

  $(".search").on('click', function () {
    $(".menu-item").addClass("hide");
    $(".search-form").addClass("show");
    $(".search-close").addClass("show");
    $(".search").fadeOut(500);
  });
  $(".search-close").on('click', function () {
    $(".menu-item").removeClass("hide");
    $(".search-form").removeClass("show");
    $(".search-close").removeClass("show");
    $(".search").fadeIn(500);
  });

  // ================== Search Hide/Show Js End ==================

  // ================== Banner Slide Js Start ==================

  $('.banner-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: false,
    dots: true,
    prevArrow: '.left',
    nextArrow: '.right',
    speed: 1500,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  });

  // ================== Banner Slide Js End ==================

  // ================== Venobox Js Start ==================

  $('.venobox').venobox();

  // ================== Venobox Js End ==================

  //================= Brand Slide Js Start ================
	
	$('.brand-slide').slick({
		dots: false,
		arrows: false,
		speed: 800,
		autoplay:true,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode:true,
		centerPadding:0,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					arrows:false,
				}
		 },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					arrows:false,
				}
		 },
		 {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				arrows:false,
			}
	 },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows:false,
				}
		 }
	  ]
	});

	//================= Brand Slide Js End ================

  // ================== Classes Slide Js Start ==================

  $('.classes-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: false,
    dots: false,
    prevArrow: '.cleft',
    nextArrow: '.cright',
    speed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ================== Classes Slide Js End ==================

  // ================== Trainers Slide Js Start ==================

  $('.trainers-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: false,
    dots: false,
    prevArrow: '.tleft',
    nextArrow: '.tright',
    speed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ================== Trainers Slide Js End ==================

  // ================== Product Slide Js Start ==================

  $('.product-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    fade: false,
    dots: false,
    prevArrow: '.prleft',
    nextArrow: '.prright',
    speed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
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
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ================== Product Slide Js End ==================

  // ================== Blog Slide Js Start ==================

  $('.blog-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    fade: false,
    dots: false,
    prevArrow: '.blleft',
    nextArrow: '.blright',
    speed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
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
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ================== Blog Slide Js End ==================

  //================= Discount Slide Js Start ================

	$('.discount-slide').slick({
		dots: false,
		arrows: false,
		speed: 800,
		autoplay:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
		 },
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				}
		 },
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
		 }
	  ]
	});

  //================= Discount Slide Js End ================
  
  //================= Product Details Slide Js Start ================

	$('.slide_item').slick({
		dots: false,
		arrows: false,
		speed: 800,
		autoplay:true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
    centerPadding: '0px',
    autoplaySpeed:1000,
	});
	
	//================= Product Details Slide Js End ================

  //==================Counter JS Start==================

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  //==================Counter JS End==================

  // ================== Testimonial Slide Js Start ==================

  $('.test-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: false,
    dots: false,
    prevArrow: '.teleft',
    nextArrow: '.teright',
    speed: 1500,
    autoplaySpeed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
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
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ================== Testimonial Slide Js End ==================

  // ================== Back To Top Js Start ==================

  $(".back2top").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 700);
  });
  $(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 300)
      $(".back2top").fadeIn(500);
    else
      $(".back2top").fadeOut(500);
  });

  // ================== Back To Top Js Start ==================

});