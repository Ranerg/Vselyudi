application.directive('tip', function () {
	return {
		restrict: 'A',
		transclude: 'element',
		replace: true,
		scope: {
			tip: '=',
		},
		templateUrl: 'app/assets/views/layers/tip_wrap.html',
		/*  controller:function($scope, $timeout){
			$timeout(function(){$scope.tip+=':)'
			console.log($scope.tip)
		}, 10000);

		},*/
		link: function ($scope, element, attrs) {
			var input = element.find('div input');
			var tip = element.find('.tip');

			$scope.$watch('tip', function (newValue, oldValue) {
				inputHeight = input.innerHeight();
				tipHeight = tip.innerHeight();

				offset = tipHeight - inputHeight;

				if (offset) offset = offset / 2;

				tip.css({
					top: -offset
				});
			}, true);

			input.focus(function () {
				tip.addClass('show');
			});

			input.blur(function () {
				tip.removeClass('show');
			});
		},
	};
});


application.directive('exit', function ($state, Auth){
	return {
		restrict: 'A',
		link: function ($scope, elemen, attrs ){
			$scope.loggout = function (){
				Auth.exit({}, function(){
					alert('Вы уходите?:) Заходите к нам еще, мы рады вас видеть:)');
					$state.go('main');
				});
			};
		}
	};

});