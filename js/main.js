$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 1500
    });
  });

  $("#liveClassWrap .slick").slick({
    variableWidth: true,
    autoplay: true,
    arrows: false,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    centerMode: true,
    centerPadding: '0',
  });

  function updateSlideSizes() {
    const $slides = $('#liveClassWrap .liveClassSlideBox .slide');
    $slides.removeClass('near-center');

    const $center = $('#liveClassWrap .liveClassSlideBox .slick-center');
    const $prev = $center.prev('.slide');
    const $next = $center.next('.slide');

    $prev.addClass('near-center');
    $next.addClass('near-center');
  }

  // 슬릭 초기화 후 클래스 적용
  $('#liveClassWrap .slick').on('setPosition', function () {
    updateSlideSizes();
  });

});
