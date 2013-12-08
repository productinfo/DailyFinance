'use strict';

angular.module('DailyFinanceApp')
  .controller('LoginCtrl', function ($scope, $location, $password, AuthenticationService, $modalFactory) {
    $scope.login = function () {
      AuthenticationService.login(this.credentials).success(function () {
        $location.path('/');
      });
    };

    $scope.retrievePassword = function () {
      $modalFactory.retrievePasswordModal(function (email) {
        $password.retrievePassword({}, {
          email: email
        }).$promise.then(function () {
          $modalFactory.success('Email Sent!', 'Please check your email and retrieve password.');
        }, function () {
          // error
          $modalFactory.error();
        });
      });
    };
  });
