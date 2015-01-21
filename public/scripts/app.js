var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '../views/home.html',
            controller: 'MainCtrl'
        }).
        when('/recipes', {
            templateUrl: '../views/recipes.html',
            controller: 'RecipeCtrl'
        }).
        when('/resume', {
            templateUrl: '../views/resume.html',
            controller: 'ResumeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
})