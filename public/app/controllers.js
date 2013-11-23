application.controller("ApplicationController", function ($scope) {
	// Главный контроллер:)
});

application.controller('MainFormRegistation', function ($scope, Auth) {
	$scope.submitRegistation = function () {
		Auth.register($scope.register);
	};
});

application.controller('MainFormLogin', function ($scope, Auth) {
	$scope.submitLogin = function () {
		Auth.login($scope.login);
	};
});

application.controller('MainFormForget', function ($scope, Auth) {
	$scope.submitForget = function () {
		Auth.forget($scope.forget);
	};
});