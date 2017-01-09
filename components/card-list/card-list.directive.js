(function () {
	'use strict';

	angular.module('alanheuertz')
		.directive('cardList', CardListDirective);

	function CardListDirective() {
		var directive = {
			restrict: 'A',
			scope: {
				items: '='
			},
			templateUrl: 'components/card-list/card-list.directive.html',
			controller: 'CardListController',
			controllerAs: 'vm',
			bindToController: true
		};
		return directive;
	}
})();
