
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap-sass');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
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
require('owl.carousel');
require('owl.carousel/dist/assets/owl.carousel.min.css');
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
require('fitvids/fitvids.min.js');
require('font-awesome/css/font-awesome.min.css');

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key',
//     cluster: 'mt1',
//     encrypted: true
// });
