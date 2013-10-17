'use strict';

angular.module('DailyFinanceApp')
  .controller('AddNewCtrl', function ($scope, $session, $api) {
    var userId = $session.get('user').id;
    $scope.create = function () {
      console.log(this.expense);
      $api.create({
        userId: userId,
        payload: this.expense
      }, function () {

      });
    };
  });
