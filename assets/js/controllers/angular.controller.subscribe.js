;(function(window, document, undefined) {
	var Greatskin = new namespace("Greatskin");

	// Subscribe Controller
	Greatskin.Angular.controller('SubscribeCtrl', ['$scope', '$http', function($scope, $http) {

		// Data
		$scope.subscribectrl = {
			options: {

			},
			states: {
				pending: false,
				subscribed: false,
				error: false,
				validated: false
			},
			css: {}
		};

		/* Scope Functions
		 ===========================*/
		$scope.subscribectrl.validateForm = function() {
			/*
			var accepted = false;
			if ($scope.form.accept == true) {
				//accepted = true;
			}
			*/
			if (!$scope.form.$invalid) {
				return true;
			}
			else {
				$scope.subscribectrl.states.validated = false;
				for (var i=0;i<$scope.form.$error.required.length;i++) {
					var required = $scope.form.$error.required[i];
					required.$setViewValue(required.$viewValue);
				}
				return false;
			}
		};
		$scope.subscribectrl.subscribe = function() {
			if ($scope.form != undefined && !$scope.subscribectrl.states.subscribed) {
				var valid = $scope.subscribectrl.validateForm();
				//console.log($scope.form.formdata)
				return false; // Until right url is implemented
				if (valid) {
					var url = "/api/newsletter/subscribe?email=" + $scope.form.formdata.email;
					$scope.subscribectrl.states.pending = true;
					$scope.subscribectrl.states.subscribed = false;
					$scope.subscribectrl.states.error = false;
					$http({
						method: 'POST',
						url: url
					}).success(function (data, status, headers, config) {
						$scope.subscribectrl.states.subscribed = true;
						$scope.subscribectrl.states.error = false;
						$scope.subscribectrl.states.pending = false;
					}).error(function (data, status, headers, config) {
						$scope.subscribectrl.states.subscribed = false;
						$scope.subscribectrl.states.error = true;
						$scope.subscribectrl.states.pending = false;
					});
				}
			}
		};

		/* Bindings
		===========================*/
		// Scope Events

		// User Events

	}]);

})(window, window.document);
