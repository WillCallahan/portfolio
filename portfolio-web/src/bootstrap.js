import $ from 'jquery'
import WOW from 'wowjs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import _ from 'lodash'
// window._ = _;
// window.jQuery = window.$ = $
Object.assign(window, { $: jQuery, jQuery });
import 'bootstrap'
import 'jquery.backstretch'
// import 'jquery.backstretch/jquery.backstretch.min.js'
import 'jquery.simple-text-rotator'
import 'jquery.simple-text-rotator/simpletextrotator.css'
import 'jquery-countto'
// import 'jquery-countto/jquery.countTo.js'
import 'jquery-popup-overlay'
import 'smoothscroll'
import 'smoothscroll/smoothscroll.min.js'
import 'magnific-popup'
import 'animate.css'
import 'fitvids'
import 'font-awesome/css/font-awesome.min.css'
import '@popperjs/core'

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