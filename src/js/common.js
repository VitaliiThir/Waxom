/* Preloader */
$(window).on('load', function () {
    let preloader = $('.preloader');
    let preloaderItem = preloader.find('.preloader-item');
    preloaderItem.fadeOut();
    preloader.delay(350).fadeOut('slow');
});
/*END Preloader */

document.addEventListener("DOMContentLoaded", function (event) {

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

    /* Excellent for Mobile Devices */
    $('.devices-description ul li').on('click', function () {
        $(this).children('ul').slideToggle(400);
        $(this).toggleClass('active');
    });
    /*END Excellent for Mobile Devices */

    /* Counter */
    let show = true;
    let countbox = "#counts";
    if (document.querySelector(countbox)) {
        $(window).on("scroll load resize", function(){

            if(!show) return false;

            let w_top = $(window).scrollTop();
            let e_top = $(countbox).offset().top;

            let w_height = $(window).height();
            let d_height = $(document).height();

            let e_height = $(countbox).outerHeight();

            if(w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
                $(".spincrement").spincrement({
                    thousandSeparator: "",
                    duration: 2000
                });

                show = false;
            }
        });
    }
    /*END Counter */

    /* Posts */
    $('#posts-slider').owlCarousel({
        responsive: {
           576: {
               items: 1
           } ,
            768: {
               items: 2
            },
            992: {
               items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 3000,
        dots: false,
        nav: true,
        navText: false,
        navSpeed: 1500,
        margin: 30,
        center: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true
    });
    /*END Posts */

    /* Partners slider */
    $('#partners-slider').owlCarousel({
        responsive: {
            576: {
                items: 2
            } ,
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        },
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 3000,
        dots: false,
        nav: false,
        navSpeed: 1500,
        margin: 90,
        loop: true,
        touchDrag: true
    });
    /*END Partners slider */

    /* Wow.js */
    let wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 150, // default
        mobile: false, // default
        live: true // default
    });
    wow.init();
    /*END Wow.js */

    /* Scroll */
    function handler(event) {
        let hash = event.target.hash;

        if (hash) {
            let tag = $(hash);
            if ($(hash).length) {
                let offset = tag.offset().top;
                $('html, body').stop().animate({scrollTop: offset}, 900);
            }
        }
    }
    $('.header nav ul li a').on("click", handler);

    //////////////////////////////

    function activeMenuLink() {
        $('.header.fixed nav ul li a').each(function(){
            let selector = $(this).attr('href');
            let windowTop = $(window).scrollTop();
            let sectionTop = $(selector).offset().top;
            if(windowTop > sectionTop -100){
                $('.header.fixed nav ul li a').removeClass('selected').filter(this).addClass('selected');
            }
        });
    }

    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 95) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
        activeMenuLink();
        scrollBtn();
    });

    let btnScrollTop = $('.scroll-button');
    function scrollBtn(){
        let bodyScroll = $('html, body').scrollTop();
        if(bodyScroll > 300) {
            $(btnScrollTop).addClass('active');
        } else {
            $(btnScrollTop).removeClass('active');
        }
    }
    $(btnScrollTop).on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    /*END Scroll */

    /* Search */
    function searchResize() {
        let windowWidth = $(window).width();
        if(windowWidth < 768 && windowWidth >= 576) {
            $('.header .logo').after($('.search'));
        } else {
            $('.navigation nav').after($('.search'));
        }
    }
    $(window).on('resize', function () {
        searchResize();
    });
    searchResize();
    /*END Search */

});
