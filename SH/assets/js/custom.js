/*
 * Adapted from the Rival Template 
 */

(function($){
	$(document).ready(function() {

	/* Preloader */

	$(window).load(function() {
		$('.loader').fadeOut();
		$('.page-loader').delay(350).fadeOut('slow');
	});

		/* Initialization General Scripts for all pages */

		var homeSection = $('.home-section'),
			videoSection = $('.module-video'),
			navbar      = $('.navbar-custom'),
			navHeight   = navbar.height(),
			width       = Math.max($(window).width(), window.innerWidth),
			mobileTest;

		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		}

		buildHomeSection(homeSection);
		navbarAnimation(navbar, homeSection, navHeight);
		buildVideoSection(videoSection);

		$(window).resize(function() {
			var width = Math.max($(window).width(), window.innerWidth);
			buildHomeSection(homeSection);
			buildVideoSection(videoSection);
		});


		$(window).scroll(function() {
			effectsHomeSection(homeSection, this);
			navbarAnimation(navbar, homeSection, navHeight);
		});

		/*  Home section height  */

		function buildHomeSection(homeSection) {
			if (homeSection.length > 0) {
				if (homeSection.hasClass('home-full-height')) {
					homeSection.height($(window).height());
				} else {
					homeSection.height($(window).height() * 0.85);
				}
			}
		}

		/*  Video section height  */

		function buildVideoSection(videoSection) {
			if (videoSection.length > 0) {
				if (videoSection.hasClass('video-full-height')) {
					console.log("video sec.length > 0");
					videoSection.height($(window).height() * 0.5);
					console.log($(window).height() * 0.5);
					videoSection.height($(window).width() * 0.5);
					console.log($(window).width() * 0.5);
				} else {
					console.log("video sec.length > 0");
					videoSection.height($(window).height() * 0.5);
					videoSection.height($(window).width() * 0.5);
				}
			}
		}

		/*  Gallery popup effects */

		$('.video-pop-up').magnificPopup({
			type: 'iframe',
		});

		$('a.gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				titleSrc: 'title',
				tError: 'The image could not be loaded.',
			}
		});
		
		/*  Youtube video background */

		$(function(){
			$(".video-player").mb_YTPlayer();
		});

		$('#video-play').click(function(event) {
			event.preventDefault();
			if ($(this).hasClass('fa-play')) {
				$('.video-player').playYTP();
			} else {
				$('.video-player').pauseYTP();
			}
			$(this).toggleClass('fa-play fa-pause');
			return false;
		});

		$('#video-volume').click(function(event) {
			event.preventDefault();
			$('.video-player').toggleVolume();
			$(this).toggleClass('fa-volume-off fa-volume-up');
			return false;
		});

		/* Home section effects */

		function effectsHomeSection(homeSection, scrollTopp) {
			if (homeSection.length > 0) {
				var homeSHeight = homeSection.height();
				var topScroll = $(document).scrollTop();
				if ((homeSection.hasClass('home-parallax')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
					homeSection.css('top', (topScroll * 0.55));
				}
				if (homeSection.hasClass('home-fade') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
					var caption = $('.caption-content');
					caption.css('opacity', (1 - topScroll/homeSection.height() * 1));
				}
			}
		}

		/* Transparent navbar animation  */

		function navbarAnimation(navbar, homeSection, navHeight) {
			var topScroll = $(window).scrollTop();
			if (navbar.length > 0 && homeSection.length > 0) {
				if(topScroll >= navHeight) {
					navbar.removeClass('navbar-transparent');
				} else {
					navbar.addClass('navbar-transparent');
				}
			}
		}

		/*  Navbar collapse on click */

		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});

		/*  Set sections backgrounds */

		var module = $('.home-section, .module ');
		module.each(function(i) {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});

		/* Scroll Animation  */

		$('.section-scroll').bind('click', function(e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
		});

		/* Scroll top  */

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		$('a[href="#home"]').click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
		});

	});
})(jQuery);