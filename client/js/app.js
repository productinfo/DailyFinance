'use strict';

angular.module('DailyFinanceApp', [
  'ngRoute',
  'ngResource'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
