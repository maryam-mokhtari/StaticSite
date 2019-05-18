$(function() {
  $('#sidenav-open').click(function() {
    $('#sidenav').css('width', '100%');
    $('#main-navbar').css('opacity', '1');
  });
  $('#sidenav-close').click(function() {
    $('#sidenav').css('width', '0');
    $('#main-navbar').css('opacity', '0');
  });
  $('#search-open').click(function() {
    $('#search-nav').css('width', '100%');
    $('.search-category').css('opacity', '1');
  });
  $('#search-close').click(function() {
    $('#search-nav').css('width', '0');
    $('.search-category').css('opacity', '0');
  });
})
