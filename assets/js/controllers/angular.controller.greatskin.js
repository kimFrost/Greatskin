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
			deliveryoverlay: {
				states: {
					show: false
				},
				css: {
					left: null,
					top: null
				}
			},
			css: {}
		};

		/* Scope Functions
		===========================*/
		$scope.greatskinctrl.toggleOverlay = function(elem, state) {
			//console.log("toggleOverlay");
			state = (state === undefined) ? "toggle" : state;
			if (state === "toggle") {
				$scope.greatskinctrl.deliveryoverlay.states.show = !$scope.greatskinctrl.deliveryoverlay.states.show;
			}
			else if (state === "hide") {
				$scope.greatskinctrl.deliveryoverlay.states.show = false;
			}
			else if (state === "show") {
				$scope.greatskinctrl.deliveryoverlay.states.show = true;
			}
			if ($scope.greatskinctrl.deliveryoverlay.states.show) {
				$scope.greatskinctrl.setPos(elem);
			}
		};
		$scope.greatskinctrl.setPos = function(e) {
			var elem = angular.element(e.srcElement);
			var rect = elem[0].getBoundingClientRect();
			var left = rect.left + (rect.width / 2);
			left = left.toString() + "px";
			var top = rect.top.toString() + "px";
			$scope.greatskinctrl.deliveryoverlay.css.left = left;
			$scope.greatskinctrl.deliveryoverlay.css.top = top;

		};
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
