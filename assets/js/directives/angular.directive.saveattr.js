;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");

	Greatskin.Angular.directive('saveattr',[function() {
		return {
			restrict: "A",
			//transclude: true,
			controller: function($scope) {

			},
			compile: function compile(tElement, tAttrs, transclude) {
				return {
					pre: function preLink(scope, iElement, iAttrs, controller) {
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

					}
				}
			}
		};
	}]);

})(window, window.document);
