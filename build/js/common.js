$(window).on("load",function(){var e=$(".preloader");e.find(".preloader-item").fadeOut(),e.delay(350).fadeOut("slow")}),document.addEventListener("DOMContentLoaded",function(e){$("#mix-row").mixItUp(),$(".projects nav li").on("click",function(){$(".projects nav li").removeClass("selected"),$(this).addClass("selected")}),$(".fancybox").fancybox(),$(".top-slider").owlCarousel({items:1,autoplay:!0,autoplayTimeout:7e3,autoplaySpeed:3e3,dots:!0,dotsEach:!0,nav:!0,navText:!1,navSpeed:1500,margin:0,loop:!0,mouseDrag:!0,touchDrag:!0});var t=$('<iframe src="https://www.youtube.com/embed/tFIBOQqBUs0?controls=0;autoplay=1;start=2s;rel=0;loop=1" allow="accelerometer; encrypted-media; gyroscope; autoplay; picture-in-picture" allowfullscreen></iframe>');$(".presentation img:nth-child(2)").click(function(){$(".presentation .video-bg").fadeOut(300),$(".presentation-video").append($(t))}),$(document).mouseover(function(e){$(".presentation").is(e.target)||0!==$(".presentation").has(e.target).length||($(t).remove(),$(".presentation .video-bg").fadeIn(400))}),$(".devices-description ul li").on("click",function(){$(this).children("ul").slideToggle(400),$(this).toggleClass("active")})});