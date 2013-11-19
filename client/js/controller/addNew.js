'use strict';

angular.module('DailyFinanceApp')
  .controller('AddNewCtrl', function ($scope, $session, $api, $contentConfig, $location) {
    var userId = $session.get('user').uesrId;

    $scope.contentConfig = $contentConfig.addNew;

    $scope.create = function () {
      $api.create({}, {
        userId: userId,
        payload: this.expense
      }).$promise.then(function () {
        $location.path('/');
      }, function () {
        // error
        $('#errorWarning').modal();
      });
    };
  });
