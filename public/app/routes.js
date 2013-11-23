application.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state("main", {
			//abstract: true,
			url: "/",
			templateUrl: 'app/assets/views/layouts/main.html',
		})
			.state("main.login", {
				url: 'login',
				views: {
					'': {
						templateUrl: 'app/assets/views/layers/main.index.html',
					}
				}
			})
			.state("main.forget", {
				url: 'forget',
				views: {
					'': {
						templateUrl: 'app/assets/views/layers/main.forget.html',
					}
				}
			});
});