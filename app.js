(function () {
	'use strict';

	angular.module('alanheuertz', ['ui.router'])
		.config(Config);

	Config.$inject = ['$locationProvider', '$logProvider', '$stateProvider', '$urlRouterProvider'];

	function Config($locationProvider, $logProvider, $stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
		$logProvider.debugEnabled(false);

		$stateProvider
			.state('home', {
				'url': '/',
				'templateUrl': 'home.html'
			})
			.state('algorithms', {
				'url': '/algorithms',
				'templateUrl': 'algorithms.html'
			});
	}
})();
