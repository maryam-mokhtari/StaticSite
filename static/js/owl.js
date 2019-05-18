$(".owl-carousel").owlCarousel({

  responsiveClass:true,
  responsive:{
      0:{
          items: 1,
          nav: false,
          dots: true,
          loop: true,
      }
  },
	// nav: true,
  // navText: ['Prev','Next'],
  // navElement: 'span',
  // autoplay: true,
  // autoplayTimeout: 4000,
  // autoplayHoverPause: true,
  // thumbs: true,
  // thumbImage: true,
  // thumbsPrerendered: true,
  // rewind: true,
  // items: 1
});

$(".owl-carousel--nested").owlCarousel({
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          // nav:false,

        	nav: true,
          // navText: ['Prev--Nested','Next--Nested'],
          // navElement: 'span',
          dots: true,
          loop: true,
          // rewind: true,
          // items: 1,
          mouseDrag: false,
          touchDrag: false,
      }
  },
});

$(function() {
  $('#1').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        }
    }
});
  $('#2').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        }
    }
});
});
