(function ($) {

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).ready(function () {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});

	$(document).ready(function () {

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 50
		});

		$(document).on('click', '.navbar-collapse.in', function (e) {
			if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
				$(this).collapse('hide');
			}
		});

		/* ---------------------------------------------- /*
		 * Navigation
		/* ---------------------------------------------- */

		//TODO This does not work (it should slide the user to the top of the page when the title is clicked)
		$('a[href*="#"]').bind("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		var wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * A jQuery plugin for fluid width video embeds
		/* ---------------------------------------------- */

		$(".video").fitVids();

	});

})(jQuery);