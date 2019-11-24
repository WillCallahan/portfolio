import $ from 'jquery'

function requireAll(r) {
	r.keys().forEach(r);
}

const initialize = () => {
	window._ = require('lodash');

	/**
	 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
	 * for JavaScript based Bootstrap features such as modals and tabs. This
	 * code may be modified to fit the specific needs of your application.
	 */

	try {
		window.$ = window.jQuery = require('jquery');

		require('bootstrap');
		require('bootstrap-sass');
	} catch (e) {
		console.warn("Could not load bootstrap-sass")
	}

	/**
	 * Application theme Requirements
	 */

	require('jquery.backstretch');
	require('jquery.backstretch/jquery.backstretch.min.js');
	require('jquery.simple-text-rotator');
	require('jquery.simple-text-rotator/simpletextrotator.css');
	require('jquery-countto');
	require('jquery-countto/jquery.countTo.js');
	require('jquery-popup-overlay');
	require('jquery-popup-overlay/jquery.popupoverlay');
	require('owl.carousel');
	require('owl.carousel/dist/assets/owl.theme.default.min.css');
	require('waypoints/lib/jquery.waypoints.min.js');
	require('wowjs');
	require('wowjs/dist/wow.min.js');
	require('smoothscroll');
	require('smoothscroll/smoothscroll.min.js');
	require('magnific-popup');
	require('magnific-popup/dist/jquery.magnific-popup.min.js');
	require('magnific-popup/dist/magnific-popup.css');
	require('animate.css');
	require('fitvids');
	require('font-awesome/css/font-awesome.min.css');

	require('public/manifest.json');

	requireAll(require.context('./theme/', true, /\.(js)$/));
	requireAll(require.context('../public/', true, /\.(scss|png|jpg|gif|doc|docx|otf|eot|svg|ttf|woff|woff2)$/));
};

export default initialize;