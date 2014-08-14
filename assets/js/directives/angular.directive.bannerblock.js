;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");

	Greatskin.Angular.directive('bannerblock', ['$timeout', function($timeout) {
		return {
			restrict: "C",
			transclude: true,
			scope: {
				numOfItems: "@"
			},
			//template: '<div class="transcluded"></div>',
			//templateUrl: "banner.html",
			controller: function($scope) {

				console.log("controller");
				// Data
				$scope.bannerblock = {
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

				$scope.bannerblock.checkActive = function(id) {
					console.log(id);
					if (id != undefined) {
						if (id == $scope.bannerblock.activebanner) {
							return true;
						}
						else {
							return false;
						}
					}
				};
				$scope.bannerblock.testFunc = function() {
					console.log("asda2da");
				};
				$scope.bannerblock.switch = function(direction, jump) {
					$timeout.cancel($scope.bannerblock.timer);
					console.log("switch");

					$scope.bannerblock.setAutoPlay();
				};
				$scope.bannerblock.setAutoPlay = function() {
					if ($scope.bannerblock.options.autoplay) {
						$scope.bannerblock.timer = $timeout(function(){
							$scope.bannerblock.switch(1);
						}, $scope.bannerblock.options.autoplaytime);
					}
				}

			},
			compile: function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller, transclude) {
						transclude(scope, function(clone, scope) {
							iElement.append(clone);
						});
					},
					post: function postLink(scope, iElement, iAttrs, controller) {
						// Setup autoplay
						scope.bannerblock.setAutoPlay();
					}
				}
			}
		};
	}]);

})(window, window.document);
