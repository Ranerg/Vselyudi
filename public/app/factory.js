application.factory('Auth', function ($resource) {
	return $resource('http://api.vselyudi.com/auth/:action', {
		action: "@action"
	}, {
		login: {
			method: "POST",
			withCredentials: true,
			params: {
				action: 'login',
				//callback: 'JSON_CALLBACK',
			},
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
		},
		register: {
			method: "POST",
			withCredentials: true,
			params: {
				action: 'register',
			},
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
		},
		islogged: {
			method: "GET",
			withCredentials: true,
			params: {
				action: 'islogged',
			},
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				//'Access-Control-Allow-Credentials': true
			},
		},
		exit: {
			method: "POST",
			withCredentials: true,
			params: {
				action: 'exit',
			},
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				//'Access-Control-Allow-Credentials': true
			},
		},
	});
});