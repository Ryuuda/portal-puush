var puushRoutes = angular.module('puushRoutes', ['ngRoute']);
puushRoutes.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home',{
            templateUrl:'views/main.html',
            controller: 'homeCtrl'
        })
        .when('/signUp',{
            templateUrl:'views/signUp.html',
            controller: 'homeCtrl'
        })


}])