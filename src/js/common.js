/* Preloader */
$(window).on('load', function () {
    let preloader = $('.preloader');
    let preloaderItem = preloader.find('.preloader-item');
    preloaderItem.fadeOut();
    preloader.delay(350).fadeOut('slow');
});
/*END Preloader */

document.addEventListener("DOMContentLoaded", function (event) {

    let block = $('.block');
    $('button').on('click', function () {
        popUp(block);
    });

    $('.top-slider').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 7000,
        dots: true,
        dotsEach: true,
        pagination: true,
        nav: true,
        smartSpeed: 3000,
        loop: true,
        mouseDrag: true,
        touchDrag: true
    });

});
