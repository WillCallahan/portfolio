(function ($) {

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).ready(function () {
		$('#status').delay(350).fadeOut('slow');
		$('#preloader').delay(350).fadeOut('slow');
	});

	$(document).ready(function () {

		// TODO FIX This
		// $('body').scrollSpy({
		// 	target: '.navbar-custom',
		// 	offset: 50
		// });

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

	});

})(jQuery);