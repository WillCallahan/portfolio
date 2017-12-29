let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (process.env.hasOwnProperty("MIX_APP_ENV") && process.env["MIX_APP_ENV"] !== "production")
    mix.sourceMaps();

mix.react('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/theme.scss', 'public/css')
    .js('resources/assets/js/theme/theme.js', 'public/js/theme')
    .copy('resources/assets/js/theme/jqBootstrapValidation.js', 'public/js/theme')
    .copy('resources/assets/js/theme/jquery.fitvids.js', 'public/js/theme')
    .copy('resources/assets/js/theme/wow.js', 'public/js/theme')
    .copy('resources/assets/images', 'public/images')
    .version();
