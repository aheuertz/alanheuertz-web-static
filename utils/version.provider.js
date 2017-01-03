(function () {
	'use strict';

	angular.module('alanheuertz')
		.factory('VersionProvider', VersionProvider);

	VersionProvider.$inject = ['$http'];

	function VersionProvider($http) {
		return {
			getVersion: getVersion
		};

		function getVersion() {
			var request = {
				method: 'GET',
				url: '/api/version',
				headers: {
					'Accept': 'application/json'
				},
				cache: true
			};

			return $http(request);
//				.then(getVersionComplete)
//				.catch(getVersionFailed);

			function getVersionComplete(response) {
				return response;
			}

			function getVersionFailed(error) {
				console.log('XHR Failed for getVersion.' + error.data);
			}
		}
	}
})();
