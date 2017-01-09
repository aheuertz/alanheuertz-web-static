(function() {
	'use strict';

	angular.module('alanheuertz')
		.controller('AlgorithmsController', AlgorithmsController);

	function AlgorithmsController() {
		var vm = this;
		vm.categories = [
			{
				name: 'Search',
				image: 'img/algorithms/categories/search.svg'
			},
			{
				name: 'Sort',
				image: 'img/algorithms/categories/coming-soon.svg'
			}
		];
	}
})();
