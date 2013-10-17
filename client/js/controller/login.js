'use strict';

angular.module('DailyFinanceApp')
  .controller('LoginCtrl', function ($scope, $location, AuthenticationService) {
    $scope.login = function () {
      AuthenticationService.login(this.credentials).success(function () {
        $location.path('/');
      });
    };
  });
