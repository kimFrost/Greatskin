;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");

	Greatskin.Angular.directive('bannerblock', ['$timeout', function($timeout) {
		return {
			restrict: "C",
			transclude: true,
			scope: {
				numOfItems: "@"
			},
			//template: '<div data-ng-transclude></div>',
			//templateUrl: "banner.html",
			controller: function($scope) {

				// Data
				$scope.bannerblock = {
					options: {
						autoplay: true,
						autoplaytime: 10000,
						numOfItems: parseInt($scope.numOfItems)
					},
					activebanner: 0,
					timer: null,
					states: {

					},
					css: {}
				};

				$scope.bannerblock.checkActive = function(id) {
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

				};
				$scope.bannerblock.switch = function(direction, jump) {
					direction = (direction === undefined) ? 1 : direction;
					$timeout.cancel($scope.bannerblock.timer);
					var activeIndex = $scope.bannerblock.activebanner;
					var newActiveIndex = (activeIndex + direction) % $scope.bannerblock.options.numOfItems;
					if (newActiveIndex < 0) {
						newActiveIndex = Math.abs($scope.bannerblock.options.numOfItems + newActiveIndex);
					}
					$scope.bannerblock.activebanner = newActiveIndex;
					$scope.bannerblock.setAutoPlay(direction);
				};
				$scope.bannerblock.setAutoPlay = function(direction) {
					direction = (direction === undefined) ? 1 : direction;
					if ($scope.bannerblock.options.autoplay) {
						$scope.bannerblock.timer = $timeout(function(){
							$scope.bannerblock.switch(direction);
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
