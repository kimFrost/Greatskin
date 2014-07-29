;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");


	// Greatskin Controller
	Greatskin.Angular.controller('GreatskinCtrl', ['$scope', '$http', '$sce',  function($scope, $http, $sce) {

		// Data
		$scope.greatskinctrl = {
			options: {

			},
			states: {

			},
			css: {}
		};

		/* Scope Functions
		 ===========================*/

		$scope.greatskinctrl.trustSrc = function(src) {
			return $sce.trustAsResourceUrl(src);
		};

		/* Bindings
		 ===========================*/
		// Scope Events
		$scope.$on('GreatskinCtrlTogglePending', function(event, state) {
			//$scope.greatskinctrl.togglePending(state);
		});

		// User Events

	}]);

})(window, window.document);
