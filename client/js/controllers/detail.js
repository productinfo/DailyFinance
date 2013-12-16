'use strict';

angular.module('DailyFinanceApp')
  .controller('DetailCtrl', function ($scope, $routeParams, $session, $api, $contentConfig, $location, $modalFactory) {

    var userId = $session.get('user').userId,
      expenseId = $routeParams.id;

    $scope.contentConfig = $contentConfig.detail;

    $scope.callDeleteAPI = function () {
      $api.delete({
        expenseId: expenseId
      }, {
        userId: userId,
      }).$promise.then(function () {
        $location.path('/');
      }, function () {
        // error
        $modalFactory.error();
      });
    };

    $scope.delete = function () {
      $modalFactory.confirmModal('delete', 'Delete this item?', 'Are you sure want to delete this expense?', function () {
        $scope.callDeleteAPI();
      });
    };

    $scope.submit = function () {
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
      }, function () {
        // error
        $modalFactory.error();
      });
    };

    $scope.getData = function () {
      $api.get({
        expenseId: expenseId
      }).$promise.then(function (data) {
        $scope.expense = data;
      }, function () {
        // error
        $modalFactory.error();
      });
    };

    $scope.getData();
  });
