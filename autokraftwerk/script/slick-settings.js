$(document).ready(function(){
    $('.gallery').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        centerMode: true,
        variableWidth:true,
        adaptiveHeight: true,
        centerPadding: '60px',
        slidesToShow: 3,
        lazyLoad: 'progressive',
        waitForAnimate:false,
        initialSlide:0,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });
});