'use strict';

angular.module('DailyFinanceApp')
  .controller('LoginCtrl', function ($scope, $location, $password, AuthenticationService, $modalFactory) {
    $scope.login = function () {
      AuthenticationService.login(this.credentials).success(function () {
        $location.path('/');
      });
    };

    $scope.callRetrievePasswordAPI = function (email) {
      $password.retrievePassword({}, {
        email: email
      }).$promise.then(function () {
        $modalFactory.success('Email Sent!', 'Please check your email and retrieve password.');
      }, function (errorObject) {
        if (errorObject.status === 404) {
          // email not found
          $modalFactory.error('Email not found!', 'Input email is not found.');
        } else {
          // server error
          $modalFactory.error();
        }
      });
    };

    $scope.retrievePassword = function () {
      $modalFactory.retrievePasswordModal(function (email) {
        $scope.callRetrievePasswordAPI(email);
      });
    };
  });
