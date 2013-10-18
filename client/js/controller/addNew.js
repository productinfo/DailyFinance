'use strict';

angular.module('DailyFinanceApp')
  .controller('AddNewCtrl', function ($scope, $session, $api, $contentConfig) {
    var userId = $session.get('user').id;

    $scope.contentConfig = $contentConfig.addNew;

    $scope.create = function () {
      $api.create({
        userId: userId,
        payload: this.expense
      }, function () {

      });
    };
  });
