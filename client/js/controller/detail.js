'use strict';

angular.module('DailyFinanceApp')
  .controller('DetailCtrl', function ($scope, $routeParams, $session, $api, $contentConfig, $location) {

    var userId = $session.get('user').id;
    var expenseId = $routeParams.id;

    $scope.contentConfig = $contentConfig.detail;

    $scope.showWarningModal = function () {
      $('#deleteWarning').modal();
    };

    $scope.delete = function () {
      $('#deleteWarning').modal('hide');
      $api.delete({
        expenseId: expenseId
      }, {
        userId: userId,
      }).$promise.then(function () {
        $('#deleteWarning').on('hidden.bs.modal', function () {
          $location.search('userId', null).path('/');
          $scope.$apply();
        });
      }, function () {
        // error
        $('#errorWarning').modal();
      });
    };

    $scope.update = function () {
      $api.update({
        expenseId: expenseId
      }, {
        userId: userId,
        payload: $scope.expense
      }).$promise.then(function () {
        $location.search('userId', null).path('/');
        // $location.path('/');
      }, function () {
        // error
        $('#errorWarning').modal();
      });
    };

    $api.get({
      expenseId: expenseId
    }).$promise.then(function (data) {
      $scope.expense = data;
    }, function () {
      // error
      $('#errorWarning').modal();
    });
  });
