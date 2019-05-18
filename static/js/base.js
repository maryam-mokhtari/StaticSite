
var $win = $(window).scroll(function(){
  $('#top-logo').addClass('top-logo-scrolled');
  $('#top-div').removeClass('d-lg-flex');
  $('#top-hr').addClass('d-none');
  $('.migration-nav-item').addClass('nav-item2');
  if (innerWidth >= 992) {
    $('.migration-nav-link').css('padding', '1.7rem 0');
  }
  $('.top-icon-scrolled').removeClass('d-none');
  $('#navbar-supported-content').css('flex-direction', 'row');
  $('#scrolled-login').addClass('d-flex');
  $('#scrolled-login').removeClass('d-none');
  if ($win.scrollTop() == 0) {
    $('#top-logo').removeClass('top-logo-scrolled');
    $('#top-div').addClass('d-lg-flex');
    $('#top-hr').removeClass('d-none');
    $('.migration-nav-item').removeClass('nav-item2');
    if (innerWidth >= 992) {
      $('.migration-nav-link').css('padding', '.7rem 0');
    }
    $('.top-icon-scrolled').addClass('d-none');
    $('#navbar-supported-content').css('flex-direction', 'column');
    $('#scrolled-login').addClass('d-none');
    $('#scrolled-login').removeClass('d-flex');
  }
  if ( $win.scrollTop() > (innerHeight * 2 / 3) ) {
    $('.page2-icon-').css("animation", "shake 0.5s");
  }
});

$(function() {
  if (innerWidth > 1000) {
    $('#first-modal').modal('show');
  }
  $('.login-tab').show();
  $('.register-tab').hide();
  if (innerWidth < innerHeight) {
    if (innerWidth > 1000) { // tablet
      $('body').css('background-size', '100% 50vh');
      $('#section1').css('min-height', 'auto');
      $('#section2').css('min-height', 'auto');
      $('.top-left').css('display', 'none');
      $('.top-left-icon').css('display', 'none');
    }
  }
  $('#explorer').owlCarousel({
    nav: false,
    rtl: true,
    margin: 20,
    item: 3,
    stagePadding: 30,
    responsive:{
        0:{
          items:2,
          margin: 10,
        },
        500:{
          autoWidth: true,
          margin: 10,
        },
        768:{
          autoWidth: true,
        },
        992:{
          autoWidth: true,
        },
        1200:{
          stagePadding: 0,
          autoWidth: true,
        }
    }
  });
  $('#canada-box').owlCarousel({
    nav: false,
    rtl: true,
    margin: 20,
    stagePadding: 20,
    responsive:{
        0:{
          items: 2,
          margin: 10,
          stagePadding: 10,
        },
        400: {
          items: 2,
          margin: 15,
        },
        700:{
          items: 3,
          margin: 15,
        },
        769: {
          items: 3,
          margin: 15,
          nav: true,
          stagePadding: 0,
        },
        950:{
          items: 4,
          nav: true,
          stagePadding: 0,
        },
        1200:{
          items: 5,
          nav: true,
          stagePadding: 0,
        }
    }
  });

  $('#carousel-house').owlCarousel({
    nav: false,
    rtl: true,
    margin: 15,
    stagePadding: 40,
    responsive:{
        0:{
          items: 2,
          margin:  10,
          stagePadding: 10,
        },
        400: {
          items: 2,
          margin: 10,
        },
        700:{
          items: 3,
        },
        769: {
          items: 3,
          nav: true,
          stagePadding: 0,
        },
        950:{
          items: 4,
          nav: true,
          stagePadding: 0,
        },
        1200:{
          items: 5,
          stagePadding: 0,
          nav: true,
        }
    }
  });

  $('#carousel-customer').owlCarousel({
    loop: true,
    nav: false,
    rtl: true,
    margin: 15,
    stagePadding: 50,
    responsive:{
        0:{
          items: 1,
          margin:  0,
          stagePadding: 30,
        },
        400: {
          items: 1,
        },
        600:{
          items: 2,
        },
        769: {
          items: 2,
          nav: true,
          stagePadding: 0,
        },
        950:{
          items: 3,
          nav: true,
          stagePadding: 0,
        },
        1200:{
          items: 3,
          nav: true,
          stagePadding: 0,
        }
    }
  });
});

$('#showmap-checkbox').change(function() {
  console.log('clicked');
  if ($('#map-show-switch').hasClass('checked')) {
    console.log('fdd');
    $('#search-map').animate({width: 0}, 500);
    $('#search-result').animate({width: '100%'}, 500);
    $('#map-show-switch').removeClass('checked');
  } else  {
    console.log('fddd');
    $('#search-map').animate({width: '40%'}, 500);
    $('#search-result').animate({width: '60%'}, 500);
    $('#map-show-switch').addClass('checked');
  }
});
$('.migration-nav-link').click(function() {
  $('.m:not('+$(this).attr('data-target')+')').collapse('hide');
});
$('.articles-link').click(function() {
  $('.m:not('+$(this).attr('data-target')+')').collapse('hide');
});
$('.dropdown-menu').click(function(e) {
  e.stopPropagation();
});
$('.tab-link').click(function() {
  $('.tab-link').removeClass('active');
  $(this).addClass('active');
});
$('.like-img').click(function() {
  $(this).attr('src','static/img/like.svg');
});
$('.star').click(function() {
  $(this).attr('src','static/img/v2/star1.svg');
});
$('.starplus').click(function() {
  $(this).attr('src','static/img/v2/star2.svg');
});
$('.eye-open').click(function() {
  $('.password-login').attr('type', 'password');
  $(this).hide();
  $('.eye-close').show();
});
$('.eye-close').click(function() {
  $('.password-login').attr('type', 'text');
  $(this).hide();
  $('.eye-open').show();
});
$('.login-input').blur(function() {
  if ($(this).val()) {
    $('label[for='+this.id+']').hide()
  } else {
    $('label[for='+this.id+']').show()
  }
});
$('.login-tab-button').click(function() {
  $('.login-tab').show();
  $('.register-tab').hide();
  $(this).addClass('active');
  $('.register-tab-button').removeClass('active');
});
$('.register-tab-button').click(function() {
  $('.register-tab').show();
  $('.login-tab').hide();
  $(this).addClass('active');
  $('.login-tab-button').removeClass('active');
});
$('#montreal').click(function() {
  $('#house1').text('۹');
  $('#house2').text('۱۰');
  $('#house3').text('۱۱');
  $('#house4').text('۱۲');
  $('#house11').text('۲');
  $('#house12').text('۲');
});
$('#vancouver').click(function() {
  $('#house1').text('۵');
  $('#house2').text('۶');
  $('#house3').text('۷');
  $('#house4').text('۸');
  $('#house11').text('۱');
  $('#house12').text('۱');
});
$('#toronto').click(function() {
  $('#house1').text('۱');
  $('#house2').text('۲');
  $('#house3').text('۳');
  $('#house4').text('۴');
  $('#house11').text('۲');
  $('#house12').text('۲');
});
