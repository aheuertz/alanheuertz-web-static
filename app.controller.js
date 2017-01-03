(function () {
        'use strict';

        angular.module('alanheuertz')
                .controller('AppController', AppController);

	AppController.$inject = ['VersionProvider'];

        function AppController(VersionProvider) {
                var vm = this;
		vm.versionLoaded = false;

                VersionProvider.getVersion()
			.then(getVersionSuccess)
			.catch(getVersionFailed);

		function getVersionSuccess(response) {
			vm.version = response.data;
			vm.versionLoaded = true;
		}

		function getVersionFailed(error) {
			console.log(error);
		}
        }
})();
