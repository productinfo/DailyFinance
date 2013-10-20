'use strict';

angular.module('DailyFinanceApp')
  .controller('DetailCtrl', function ($scope, $routeParams, $session, $api, $contentConfig) {

    var userId = $session.get('user').id;

    $scope.contentConfig = $contentConfig.detail;

    $scope.showWarningModal = function () {
      $('#deleteWarning').modal();
    };

    $scope.delete = function () {
      console.log('delete');
      $('#deleteWarning').modal('hide');
    };

    $api.get({
      expenseId: $routeParams.id
    }, {
      userId: userId
    }, function (data) {

    });
    // $scope.expense = {
    //   name: 'ya'
    // };
  });
