$(window).on("load",function(){var e=$(".preloader");e.find(".preloader-item").fadeOut(),e.delay(350).fadeOut("slow")}),document.addEventListener("DOMContentLoaded",function(e){$("#mix-row").mixItUp(),$(".projects nav li").on("click",function(){$(".projects nav li").removeClass("selected"),$(this).addClass("selected")}),$(".fancybox").fancybox(),$(".top-slider").owlCarousel({items:1,autoplay:!0,autoplayTimeout:7e3,autoplaySpeed:3e3,dots:!0,dotsEach:!0,nav:!0,navText:!1,navSpeed:1500,margin:0,loop:!0,touchDrag:!0});var o=$('<iframe src="https://www.youtube.com/embed/tFIBOQqBUs0?controls=0;autoplay=1;start=2s;rel=0;loop=1" allow="accelerometer; encrypted-media; gyroscope; autoplay; picture-in-picture" allowfullscreen></iframe>');$(".presentation img:nth-child(2)").click(function(){$(".presentation .video-bg").fadeOut(300),$(".presentation-video").append($(o))}),$(document).mouseover(function(e){$(".presentation").is(e.target)||0!==$(".presentation").has(e.target).length||($(o).remove(),$(".presentation .video-bg").fadeIn(400))}),$(".devices-description ul li").on("click",function(){$(this).children("ul").slideToggle(400),$(this).toggleClass("active")});var i=!0,s="#counts";document.querySelector(s)&&$(window).on("scroll load resize",function(){if(!i)return!1;var e=$(window).scrollTop(),o=$(s).offset().top,a=$(window).height(),t=$(document).height(),n=$(s).outerHeight();(o<=e+700||a+e==t||n+o<a)&&($(".spincrement").spincrement({thousandSeparator:"",duration:2e3}),i=!1)}),$("#posts-slider").owlCarousel({responsive:{0:{items:1,margin:10},576:{items:2,margin:10},768:{items:2,center:!0},992:{items:3,center:!0}},autoplay:!0,autoplayTimeout:7e3,autoplaySpeed:3e3,dots:!1,nav:!0,navText:!1,navSpeed:1500,margin:30,loop:!0,mouseDrag:!0,touchDrag:!0}),$("#partners-slider").owlCarousel({responsive:{0:{items:1,margin:10},576:{items:2,margin:35},768:{items:3,margin:20},992:{items:4}},autoplay:!0,autoplayTimeout:7e3,autoplaySpeed:3e3,dots:!1,nav:!1,navSpeed:1500,margin:90,loop:!0,touchDrag:!0}),new WOW({boxClass:"wow",animateClass:"animated",offset:100,live:!0}).init(),$(".header nav ul li a").on("click",function(e){var o=e.target.hash;if(o){var a=$(o);if($(o).length){var t=a.offset().top;$("html, body").stop().animate({scrollTop:t},900)}}}),$(window).on("scroll",function(){95<$(this).scrollTop()?$(".header").addClass("fixed"):$(".header").removeClass("fixed"),$(".header.fixed nav ul li a").each(function(){var e=$(this).attr("href"),o=$(window).scrollTop();$(e).offset().top-100<o&&$(".header.fixed nav ul li a").removeClass("selected").filter(this).addClass("selected")}),300<$("html, body").scrollTop()?$(a).addClass("active"):$(a).removeClass("active")});var a=$(".scroll-button");function t(){var e=$(window).width();e<768&&576<=e?$(".header .logo").after($(".search")):$(".navigation nav").after($(".search"))}$(a).on("click",function(){$("html, body").animate({scrollTop:0},600)}),$(window).on("resize",function(){t()}),t();var n=$(window).width(),l=$(".header nav"),r=$(".navigation");function d(){n<576?($(l).css("display","block"),$(".mob-nav").on("click",function(){$(r).addClass("active"),$("body").addClass("overflow"),$(".navigation.active nav").one("click",function(){$(r).removeClass("active"),$("body").removeClass("overflow")})})):576<=n&&($(r).removeClass("active"),$(l).css("display","none"),$("body").removeClass("overflow"))}$(window).on("resize",function(){n=$(window).width(),d()}),d()});