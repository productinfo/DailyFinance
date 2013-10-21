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
      console.log('delete');
      $api.delete({
        expenseId: expenseId
      }).$promise.then(function (data) {
        $('#deleteWarning').modal('hide');
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
      }).$promise.then(function (data) {
        $location.path('/');
      }, function () {
        // error
        $('#errorWarning').modal();
      });
    };

    $api.get({
      expenseId: expenseId
    }).$promise.then(function (data) {
      console.log(data);
      $scope.expense = {
        name: data.name,
        price: data.price,
        date: data.date,
        time: data.time
      };
    }, function () {
      // error
      $('#errorWarning').modal();
    });
  });
