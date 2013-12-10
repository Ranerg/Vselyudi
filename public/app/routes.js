application.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state("main", {
			url:'/',
			resolve: {
			/*	logged: function(Auth, $state){
					Auth.islogged({}, function(data){
						console.log(data.session);
						var index = data.session;
						var pages = ['intro.index.login', 'profile.index'];
						$state.go(pages[index]);
					});
				},*/

				logged: function (Auth, $state, $timeout){
					$timeout(function(){$state.go('profile.index')},100);
				}
			},
		})


		.state("intro", {
			//url: '/',
			abstract: true,
			templateUrl: 'app/assets/views/layouts/main.html',
			})

			.state("intro.index", {
				//url:'/',
						templateUrl: 'app/assets/views/layers/intro.index.html',
			})
			



			.state("intro.index.login", {
						url:'/login',
						templateUrl: 'app/assets/views/layers/intro.index.login.html'
			})
			
			.state("intro.index.forget", {
				url:'/forget',
				templateUrl: 'app/assets/views/layers/intro.index.forget.html',

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
				abstract: true,

						//templateUrl: 'app/assets/views/layers/profile.index.html',
						template: '<div ui-view></div>'
		
			})
			.state('profile.index',{
				templateUrl: 'app/assets/views/layers/profile.index.html',
			});

});