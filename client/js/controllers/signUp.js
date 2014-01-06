'use strict';

angular.module('DailyFinanceApp')
  .controller('SignUpCtrl', function ($scope, $location, $account, $modalFactory, $flash) {

    // clean the flash message
    $flash.clear();

    $scope.signup = function () {

      var profile = this.profile || {};

      if (!Object.has(profile, 'name')) {
        this.show('Name cannot be empty!');
        return;
      }

      if (!Object.has(profile, 'email')) {
        this.show('Email cannot be empty!');
        return;
      }

      if (!Object.has(profile, 'password')) {
        this.show('Password cannot be empty!');
        return;
      }

      if (!Object.has(profile, 'confirmPassword')) {
        this.show('Please enter password again!');
        return;
      }

      if (profile.password.length < 6) {
        this.show('Password is too short!');
        return;
      }

      if (profile.password !== profile.confirmPassword) {
        this.show('Password is not matched!');
        return;
      }

      $account.create({}, {
        name: profile.name,
        email: profile.email,
        password: profile.password
      }).$promise.then(function () {
        $modalFactory.success('Account created!', 'Your account has been created successfully.', function () {
          $location.path('/login');
        });
      }, function (err) {
        if (err.status === 400) {
          // email taken
          $modalFactory.error('Email taken!', 'Someone already has registered that email. Try another?');
        } else {
          // error
          $modalFactory.error();
        }
      });
    };

    $scope.back = function () {
      $location.path('/login');
    };

    $scope.show = function (message) {
      $scope.flash = message;
    };
  });
