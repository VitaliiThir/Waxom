/* Preloader */
$(window).on('load', function () {
    let preloader = $('.preloader');
    let preloaderItem = preloader.find('.preloader-item');
    preloaderItem.fadeOut();
    preloader.delay(350).fadeOut('slow');
});
/*END Preloader */

document.addEventListener("DOMContentLoaded", function (event) {

    /*let block = $('.block');
    $('button').on('click', function () {
        popUp(block);
    });*/

    /* MixitUp */
    $('#mix-row').mixItUp();

    $('.projects nav li').on('click', function () {
        $('.projects nav li').removeClass('selected');
        $(this).addClass('selected');
    });
    /*END MixitUp */

    /* FancyBox */
    $('.fancybox').fancybox();
    /*END FancyBox */

    /* Top Slider */
    $('.top-slider').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 3000,
        dots: true,
        dotsEach: true,
        nav: true,
        navText: false,
        navSpeed: 1500,
        margin: 0,
        loop: true,
        mouseDrag: true,
        touchDrag: true
    });
    /*END Top Slider */
    /* Video */
    let presentVideo = $('<iframe src="https://www.youtube.com/embed/tFIBOQqBUs0?controls=0;autoplay=1;start=2s;rel=0;loop=1" allow="accelerometer; encrypted-media; gyroscope; autoplay; picture-in-picture" allowfullscreen></iframe>');

    $('.presentation img:nth-child(2)').click(function () {
        $('.presentation .video-bg').fadeOut(300);
        $('.presentation-video').append($(presentVideo));
    });
    $(document).mouseover(function (e) {
        if (!$('.presentation').is(e.target) && $('.presentation').has(e.target).length === 0) {
            $(presentVideo).remove();
            $('.presentation .video-bg').fadeIn(400);
        }
    });
    /*END Video */

});
