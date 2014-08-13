;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");

	Greatskin.Angular.directive('bannerblock',[function() {
		return {
			restrict: "C",
			//transclude: true,
			scope: {
				numOfItems: "@"
			},
			//template: "<div></div>",
			templateUrl: "banner.html",
			controller: function($scope) {

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

			},
			compile: function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller) {

						//console.log(scope);
						//console.log(tElement);




					},
					post: function postLink(scope, iElement, iAttrs, controller) {

					}
				}
			}
		};
	}]);

})(window, window.document);
