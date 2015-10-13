// create the module and name it scotchApp
var router = angular.module('router', ['ngRoute']);

// configure our routes
router.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		// route for the home page
		.when('/#', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// route for the lokaler page
		.when('/lokaler', {
			templateUrl : 'pages/lokaler.html'
		})

		// route for the medlemmar page
		.when('/medlemmar', {
			templateUrl : 'pages/medlemmar.html'
		})

		// route for the om page
		.when('/om', {
			templateUrl : 'pages/om.html'
		})

		// route for the kontakt page
		.when('/kontakt', {
			templateUrl : 'pages/kontakt.html'
		});
});

// create the controller
router.controller('mainController', function($scope) {});
