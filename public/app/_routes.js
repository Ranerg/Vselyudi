application.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state("main", {
			url:'/',
			resolve: {
				logged: function(Auth, $state){
					
					Auth.islogged({}, function(data){
						console.log(data.status);
						if(data.status == 'offline'){
							$state.go('login.index');
						} 

						if(data.status == 'online') {
							$state.go('profile')
						}
					});
				},
			},
		})


		.state("login", {
			//url: '/',
			abstract: true,
			templateUrl: 'app/assets/views/layouts/main.html',
			})

			.state("login.index", {
				//url:'/',
				views: {
					'' : {
						templateUrl: 'app/assets/views/layers/main.login.html'
					},
				},
			})




	/*		.state("main.forget", {
				url: 'forget',
				views: {
					'': {
						templateUrl: 'app/assets/views/layers/main.forget.html',
					}
				}
			})*/


			.state("profile", {
				//url: '/',

						templateUrl: 'app/assets/views/layers/main.profile.html',
		
			});
});