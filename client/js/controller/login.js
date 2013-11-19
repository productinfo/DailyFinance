'use strict';

angular.module('DailyFinanceApp')
  .controller('LoginCtrl', function ($scope, $location, $password, AuthenticationService) {
    $scope.login = function () {
      AuthenticationService.login(this.credentials).success(function () {
        $location.path('/');
      });
    };

    $scope.lostPassword = function () {
      $('#lostPassword').modal({
        show: true
      });
    };

    // $scope.show = function (message) {
    //   $scope.warning = message;
    // };

    // $scope.clear = function () {
    //   $scope.warning = '';
    // };

    $scope.send = function () {
      var email = this.user.email;
      console.log(email);
      $password.lostPassword({}, {
        email: email
      }).$promise.then(function () {
        $('#lostPassword').modal('hide');
      }, function () {
        // TODO!
        // error
        $('#errorWarning').modal();
      });
    };

    // $scope.clear();
  });
