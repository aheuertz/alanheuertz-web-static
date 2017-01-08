(function () {
	'use strict';

	angular.module('alanheuertz', [])
		.config(Config);

	Config.$inject = ['$locationProvider', '$logProvider'];

	function Config($locationProvider, $logProvider) {
		$locationProvider.html5Mode(true);
		$logProvider.debugEnabled(false);
	}
})();
