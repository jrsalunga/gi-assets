const { mix } = require('laravel-mix');
var v = 'resources/assets/vendor/'
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 | mix.js('resources/assets/js/app.js', 'public/js')
 | .sass('resources/assets/sass/app.scss', 'public/css');
*/

/*
mix.copy(v+'gi-gly/fonts/*', 'public/fonts')
	.copy(v+'font-awesome/fonts/*', 'public/fonts');
*/

//mix.minify(v+'sweetalert/dist/sweetslert.css');

mix.styles([
  v+'bootstrap/dist/css/bootstrap.min.css',
  v+'font-awesome/css/font-awesome.min.css',
  v+'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
  v+'bootstrap-daterangepicker/daterangepicker.min.css', // manual minify
  v+'highcharts/css/highcharts.min.css', // manual minify
  v+'sweetalert/dist/sweetslert.min.css', // manual minify
  v+'gi-gly/dist/gi-gly.min.css'
], 'public/css/styles-all.min.css');

mix.version();

