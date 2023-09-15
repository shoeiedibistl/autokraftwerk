$(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(200).fadeOut('slow');
    setTimeout("document.querySelector('html').style.overflowY = 'auto'", 200);
  });