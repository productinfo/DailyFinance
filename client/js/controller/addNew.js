'use strict';

angular.module('DailyFinanceApp')
  .controller('AddNewCtrl', function ($scope, $session, $api, $contentConfig) {
    var userId = $session.get('user').id;

    $scope.contentConfig = $contentConfig.addNew;

    $scope.create = function () {
      console.log('create');
      $api.create({
        userId: userId,
        payload: this.expense
      }).$promise.then(function () {

      }, function () {
        // error
        $('#errorWarning').modal();
      });
    };
  });
