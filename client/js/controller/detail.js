'use strict';

angular.module('DailyFinanceApp')
  .controller('DetailCtrl', function ($scope, $routeParams, $session, $api, $contentConfig, $location) {

    var userId = $session.get('user').uesrId;
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
        name: $scope.expense.name,
        price: $scope.expense.price,
        date: $scope.expense.date,
        time: $scope.expense.time
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
