;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");

	Greatskin.Angular.directive('saveattr',[function() {
		return {
			restrict: "A",
			scope: {
				saveattr: "="
			},
			transclude: true,
			controller: function($scope) {
				var list = eval($scope.saveattr);
				for (var i=0;i<list.length;i++) {
					var item = list[i];
					for (key in item) {
						//console.log(key);
						//console.log(item[key]);
						$scope[key] = item[key];
					}
				}
			},
			compile: function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller, transclude) {
						transclude(scope, function(clone, scope) {
							//console.log(scope.$parent);
							iElement.append(clone);
							//console.log(iElement);
						});
					},
					post: function postLink(scope, iElement, iAttrs, controller, transclude) {

					}
				}
			}
		};
	}]);


	/*
	Greatskin.Angular.directive('saveattr',[function() {
		return {
			restrict: "A",
			//transclude: true,
			controller: function($scope) {
				$scope.boomla = "Before";
			},
			compile: function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller) {
						scope.boomla = "Pre";

						var list = eval(iAttrs["saveattr"]);
						for (var i=0;i<list.length;i++) {
							var item = list[i];
							for (key in item) {
								//console.log(key);
								//console.log(item[key]);
								scope[key] = item[key];
							}
						}

					},
					post: function postLink(scope, iElement, iAttrs, controller) {
						scope.boomla = "Post";
					}
				}
			}
		};
	}]);
	*/

	/*
	Greatskin.Angular.directive('saveattr',[function() {
		return {
			restrict: "A",
			//require: "BannerblockCtrl",
			//transclude: true,
			controller: function($scope) {
				console.log("saveattr",$scope);
				$scope.boomla = "Set my saveattr"
			},
			compile: function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller) {

					},
					post: function postLink(scope, iElement, iAttrs, controller) {

					}
				}
			}
		};
	}]);
	*/


})(window, window.document);
