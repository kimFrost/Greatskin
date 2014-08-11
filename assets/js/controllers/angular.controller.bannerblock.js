;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");


	// Greatskin Controller
	Greatskin.Angular.controller('BannerblockCtrl', ['$scope', '$timeout', function($scope, $timeout) {

		// Data
		$scope.bannerblockctrl = {
			options: {
				autoplay: true,
				autoplaytime: 1000
			},
			activebanner: 0,
			timer: null,
			states: {

			},
			css: {}
		};

		/* Scope Functions
		 ===========================*/
		$scope.bannerblockctrl.checkActive = function(id) {
			if (id != undefined) {
				if (id == $scope.bannerblockctrl.activebanner) {
					return true;
				}
				else {
					return false;
				}
			}
		};
		$scope.bannerblockctrl.switch = function(direction, jump) {
			$timeout.cancel($scope.bannerblockctrl.timer);
			console.log("switch");

			$scope.bannerblockctrl.setAutoPlay();
		};
		$scope.bannerblockctrl.setAutoPlay = function() {
			if ($scope.bannerblockctrl.options.autoplay) {
				$scope.bannerblockctrl.timer = $timeout(function(){
					$scope.bannerblockctrl.switch(1);
				}, $scope.bannerblockctrl.options.autoplaytime);
			}
		}

		/* Bindings
		 ===========================*/
		// Scope Events

		// User Events

		// Set Autoplay
		$scope.bannerblockctrl.setAutoPlay();

	}]);

})(window, window.document);