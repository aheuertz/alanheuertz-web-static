(function () {
	'use strict';

	angular.module('alanheuertz', [])
		.config(Config);

	Config.$inject = ['$locationProvider'];

	function Config($locationProvider) {
		$locationProvider.html5Mode(true);
	}
})();
