$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 1500
    });
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
  });

  let slickApplied = false;

  function initOrDestroySlick() {
    const $slider = $("#popularWrap .slick");

    if (window.innerWidth <= 1024) {
      if (!slickApplied) {
        $slider.slick({
          variableWidth: true,
          autoplay: true,
          arrows: false,
          dots: false,
          accessibility: false,
          draggable: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          zIndex: 1000,
          pauseOnHover: false,
          autoplaySpeed: 5000,
          speed: 1500,
        });
        slickApplied = true;
      }
    } else {
      if (slickApplied) {
        $slider.slick("unslick");
        slickApplied = false;
      }
    }
  }

  initOrDestroySlick();

  $(window).on("resize", function () {
    initOrDestroySlick();
  });

});
