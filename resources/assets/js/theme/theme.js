(function ($) {

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function () {
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

		$('a[href*=#]').bind("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Background images
		/* ---------------------------------------------- */

		/* ---------------------------------------------- /*
 		 * Navbar
		/* ---------------------------------------------- */

		/* ---------------------------------------------- /*
		 * Count to
		/* ---------------------------------------------- */

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		var wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Owl slider
		/* ---------------------------------------------- */

		/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

		/* ---------------------------------------------- /*
		 * Portfolio pop up
		/* ---------------------------------------------- */

		/* ---------------------------------------------- /*
		 * A jQuery plugin for fluid width video embeds
		/* ---------------------------------------------- */

		$(".video").fitVids();

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').find('input,textarea').jqBootstrapValidation({
			preventSubmit: true,
			submitError: function ($form, event, errors) {
				// additional error messages or events
			},
			submitSuccess: function ($form, event) {
				event.preventDefault();

				var submit = $('#contact-form submit');
				var ajaxResponse = $('#contact-response');
				var name = $('#contact-form [name="name"]').val();
				var email = $('#contact-form [name="email"]').val();
				var message = $('#contact-form [name="message"]').val();

				$.ajax({
					type: 'POST',
					url: 'assets/php/contact.php',
					dataType: 'json',
					data: {
						name: name,
						email: email,
						message: message,
					},
					cache: false,
					beforeSend: function (result) {
						submit.empty();
						submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function (result) {
						if (result.sendstatus == 1) {
							ajaxResponse.html(result.message);
							$form.fadeOut(500);
						} else {
							ajaxResponse.html(result.message);
						}
					}
				});
			}
		});

	});

})(jQuery);