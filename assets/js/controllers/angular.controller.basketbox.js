;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");


	// Greatskin Controller
	Greatskin.Angular.controller('BasketboxCtrl', ['$scope', '$timeout', function($scope, $timeout) {

		// Data
		$scope.basketboxctrl = {
			options: {

			},
			states: {
				showbasket: false
			},
			css: {}
		};

		/* Scope Functions
		 ===========================*/
		$scope.basketboxctrl.togglebasket = function() {
			$scope.basketboxctrl.states.showbasket = !$scope.basketboxctrl.states.showbasket;
		};

		/* Bindings
		 ===========================*/
		// Scope Events

		// User Events

	}]);

})(window, window.document);
