;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");

	// Panes Controller
	Greatskin.Angular.controller('PanesCtrl', ['$scope', '$timeout', function($scope, $timeout) {

		// Data
		$scope.panesctrl = {
			options: {

			},
			activeindex: 0,
			states: {

			},
			css: {}
		};

		/* Scope Functions
		 ===========================*/
		$scope.panesctrl.checkActive = function(id) {
			if (id != undefined) {
				if (id == $scope.panesctrl.activeindex) {
					return true;
				}
				else {
					return false;
				}
			}
		};
		$scope.panesctrl.activate = function(index) {
			if (index != undefined) {
				$scope.panesctrl.activeindex = index;
			}
		};

		/* Bindings
		 ===========================*/
		// Scope Events

		// User Events

	}]);

})(window, window.document);
