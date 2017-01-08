(function () {
	'use strict';

	angular.module('alanheuertz')
		.directive('loader', LoaderDirective);

	function LoaderDirective() {
		var directive = {
			restrict: 'A',
			templateUrl: 'components/loader/loader.directive.html',
			controller: 'LoaderController',
			controllerAs: 'vm'
		};

		return directive;
	}
})();
