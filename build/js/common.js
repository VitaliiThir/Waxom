$(window).on("load",function(){var e=$(".preloader");e.find(".preloader-item").fadeOut(),e.delay(350).fadeOut("slow")}),document.addEventListener("DOMContentLoaded",function(e){$("#mix-row").mixItUp(),$(".projects nav li").on("click",function(){$(".projects nav li").removeClass("selected"),$(this).addClass("selected")}),$(".fancybox").fancybox(),$(".top-slider").owlCarousel({items:1,autoplay:!0,autoplayTimeout:7e3,autoplaySpeed:3e3,dots:!0,dotsEach:!0,nav:!0,navText:!1,navSpeed:1500,margin:0,loop:!0,touchDrag:!0});var o=$('<iframe src="https://www.youtube.com/embed/tFIBOQqBUs0?controls=0;autoplay=1;start=2s;rel=0;loop=1" allow="accelerometer; encrypted-media; gyroscope; autoplay; picture-in-picture" allowfullscreen></iframe>');$(".presentation img:nth-child(2)").click(function(){$(".presentation .video-bg").fadeOut(300),$(".presentation-video").append($(o))}),$(document).mouseover(function(e){$(".presentation").is(e.target)||0!==$(".presentation").has(e.target).length||($(o).remove(),$(".presentation .video-bg").fadeIn(400))}),$(".devices-description ul li").on("click",function(){$(this).children("ul").slideToggle(400),$(this).toggleClass("active")});var n=!0,s="#counts";document.querySelector(s)&&$(window).on("scroll load resize",function(){if(!n)return!1;var e=$(window).scrollTop(),o=$(s).offset().top,t=$(window).height(),a=$(document).height(),i=$(s).outerHeight();(o<=e+700||t+e==a||i+o<t)&&($(".spincrement").spincrement({thousandSeparator:"",duration:2e3}),n=!1)}),$("#posts-slider").owlCarousel({responsive:{576:{items:1},768:{items:2},992:{items:3}},autoplay:!0,autoplayTimeout:7e3,autoplaySpeed:3e3,dots:!1,nav:!0,navText:!1,navSpeed:1500,margin:30,center:!0,loop:!0,mouseDrag:!0,touchDrag:!0}),$("#partners-slider").owlCarousel({responsive:{576:{items:2},768:{items:3},992:{items:4}},autoplay:!0,autoplayTimeout:7e3,autoplaySpeed:3e3,dots:!1,nav:!1,navSpeed:1500,margin:90,loop:!0,touchDrag:!0}),new WOW({boxClass:"wow",animateClass:"animated",offset:150,mobile:!1,live:!0}).init(),$(".header nav ul li a").on("click",function(e){var o=e.target.hash;if(o){var t=$(o);if($(o).length){var a=t.offset().top;$("html, body").stop().animate({scrollTop:a},900)}}}),$(window).on("scroll",function(){95<$(this).scrollTop()?$(".header").addClass("fixed"):$(".header").removeClass("fixed"),$(t).css("opacity","0.4"),$(".header.fixed nav ul li a").each(function(){var e=$(this).attr("href"),o=$(window).scrollTop();$(e).offset().top-100<o&&$(".header.fixed nav ul li a").removeClass("selected").filter(this).addClass("selected")}),a()});var t=$(".scroll-button");function a(){300<$("html, body").scrollTop()?$(t).addClass("active"):$(t).removeClass("active")}a(),$(t).on("click",function(){$("html, body").animate({scrollTop:0},600)})});