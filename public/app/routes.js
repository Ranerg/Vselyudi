application.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'app/assets/views/layouts/index.html',
			controller  : 'mainController'
		})
});