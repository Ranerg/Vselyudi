application.controller("ApplicationController", function ($scope) {
	// Главный контроллер:)
});

application.controller('MainFormRegistation', function ($scope, Auth) {
	$scope.register = {};
	$scope.tip_email = 'Введите ваш E-mail';
	$scope.tip_firstname = 'Введите ваше имя';
	$scope.tip_lastname = 'Введите вашу фамилию'
	$scope.tip_password = 'Введите ваш пароль';
	$scope.tip_registration = ':)';

	$scope.submitRegistation = function () {
		Auth.register($scope.register, function (data){
			if(data.status == 'error'){
				if(data.number == 1){
					$scope.tip_registration = 'Проверьте правильность полей';
				} else if(data.number == 2){
					$scope.tip_registration = 'Веденный вами E-mail уже используется';
				}
			} else if(data.status == 'ok'){
				alert('Вы успешно зарегистрировались, ваш id:' + data.id);
			}


		});
	};
});

application.controller('MainFormLogin', function ($scope, Auth, $state, $element) {
	$scope.login = {};
console.log($scope)
	$scope.tip_submitLogin = ':)';
	$scope.tip_email = 'Введите ваш E-mail';
	$scope.tip_password = 'Введите ваш пароль';
	$scope.submitLogin = function () {
		Auth.login($scope.login, function (data){
			tip = $element.find('.tip');
			if(data.status == 'ok'){
				$scope.tip_submitLogin = 'Зашли';
				$state.go('profile.index');
			}
			if(data.status == 'error'){
				console.log($scope.tip_submitLogin);
				$scope.tip_submitLogin = 'Неправильный логин или пароль';
			}

		});
	};
});

application.controller('MainFormForget', function ($scope, Auth) {
	$scope.tip_email = 'Введите E-mail для восстановления';
	$scope.tip_submitForget = 'Восстановить профиль';
	$scope.submitForget = function () {
		Auth.forget($scope.forget);
	};
});

