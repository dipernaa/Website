var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '../views/home.html',
            controller: 'MainCtrl'
        }).
        when('/resume', {
            templateUrl: '../views/resume.html',
            controller: 'ResumeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
})