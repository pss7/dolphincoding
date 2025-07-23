$(function () {

  /* 헤더 */
  $(window).on('load', function () {
    $('#headerWrap').addClass('active');
  });

  $('.work').click(function () {
    $('.workModalWrap').fadeIn();
  });
  $('.workModalWrap .closeBtn').click(function () {
    $('.workModalWrap').fadeOut();
  });

  $('.request').click(function () {
    $('.settingModalWrap').fadeIn();
  });
  $('.settingModalWrap .closeBtn').click(function () {
    $('.settingModalWrap').fadeOut();
  });

});