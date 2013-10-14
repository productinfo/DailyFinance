'use strict';

angular.module('DailyFinanceApp')
  .controller('LoginCtrl', function ($scope, $location, AuthenticationService) {
    $scope.login = function() {
      console.log(this.credentials);
      AuthenticationService.login(this.credentials).success(function () {
        $location.path('/');
      });
    };
  });
