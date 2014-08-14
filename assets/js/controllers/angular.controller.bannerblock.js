;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");

	// Bannerblock Controller
	Greatskin.Angular.controller('BannerblockCtrl', ['$scope', '$timeout', function($scope, $timeout) {

		// Data
		$scope.bannerblockctrl = {
			options: {
				autoplay: true,
				autoplaytime: 3000
			},
			activebanner: 0,
			timer: null,
			states: {

			},
			css: {}
		};


		console.log($scope.boomla);
		$scope.$watch("boomla", function(oldval, newval) {
			console.log("$watch");
			console.log(oldval);
			console.log(newval);
		});


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


	Greatskin.Angular.controller('BannerCtrl', ['$scope', '$timeout', function($scope, $timeout) {

		// Data
		$scope.bannerctrl = {
			options: {

			},
			states: {

			},
			css: {}
		};

		/* Scope Functions
		 ===========================*/

		/* Bindings
		 ===========================*/
		// Scope Events

		// User Events

	}]);

})(window, window.document);
