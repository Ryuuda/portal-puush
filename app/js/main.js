var puushApp = angular.module('puushApp',['ngRoute','puushRoutes']);

puushApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .otherwise({redirectTo: '/home'});
    }]);