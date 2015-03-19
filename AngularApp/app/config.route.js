﻿(function () {
    'use strict';

    angular
        .module('angularApp')
        .config(routeConfig);

    /*@ngInject*/
    function routeConfig($stateProvider, $urlRouterProvider) {

    	$urlRouterProvider.otherwise("/state1");

	    $stateProvider
		    .state('Welcome', {
			    url: '/Welcome',
			    templateUrl: "app/views/index.html",
			    controller: 'Index',
				data: {
					requireLogin: true
				}
		    })
			.state('Login', {
				url: '/Login',
				templateUrl: "app/views/login.html",
				controller: 'Login',
				data: {
					requireLogin: false
				}
			});
    }
})();
