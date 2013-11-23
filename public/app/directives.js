application.directive('tip', function () {
	return {
		restrict: 'A',
		transclude: 'element',
		replace: true,
		scope: {
			tip: '@'
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
				console.log(tip.innerHeight() + " " + input.innerHeight());
				inputHeight = input.innerHeight();
				tipHeight = tip.innerHeight();

				offset = tipHeight - inputHeight;

				if (offset) offset = offset / 2;

				console.log(offset);
				tip.css({
					top: -offset
				});
			}, true);

			input.focus(function () {
				console.log($scope)
				$scope.tip += "1";
				$scope.$apply();
				tip.addClass('show');
			});

			input.blur(function () {
				tip.removeClass('show');
			});
		},
	};
});