(function () {
        'use strict';

        angular.module('alanheuertz')
                .controller('LoaderController', LoaderController);

	LoaderController.$inject = ['$interval', '$log'];

        function LoaderController($interval, $log) {
                var vm = this;
		vm.progress = 0;

		$interval(updateProgress, 500, 10);

		function updateProgress() {
			vm.progress += 10;
			$log.debug('Updating progress', vm.progress);
		}
        }
})();
