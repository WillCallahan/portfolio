import $ from 'jquery'
import AOS from 'aos'
import 'aos/dist/aos.css'
Object.assign(window, { $: jQuery, jQuery });
import 'bootstrap'
import 'jquery.backstretch'
import 'jquery.simple-text-rotator'
import 'jquery.simple-text-rotator/simpletextrotator.css'
import 'jquery-countto'
import 'jquery-popup-overlay'
import 'smoothscroll'
import 'smoothscroll/smoothscroll.min.js'
import 'magnific-popup'
import 'animate.css'
import 'fitvids'
import 'font-awesome/css/font-awesome.min.css'
import '@popperjs/core'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import '/public/sass/theme.scss'
import '/public/sass/app.scss'
import './theme/jqBootstrapValidation.js'
import './theme/theme.js'

const initializeWow = () => {
	AOS.init({
		mobile: false,
		resetAnimation: true
	})
};

const initializeAjax = () => {
	console.log('Configuring ajax with api url ', API_URL);
	$.ajaxSetup({
		beforeSend: (xhr, settings) => {
			settings.url = `${API_URL}/${settings.url}`;
		}
	});
};

const initialize = () => {
	initializeWow();
	initializeAjax();
};

export default initialize;