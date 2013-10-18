'use strict';

angular.module('DailyFinanceApp')
  .controller('DetailCtrl', function ($scope, $routeParams, $api, $contentConfig) {
    $scope.contentConfig = $contentConfig.detail;
    $api.get({
      expenseId: $routeParams.id
    }, function (data) {

    });
    // $scope.expense = {
    //   name: 'ya'
    // };
  });
