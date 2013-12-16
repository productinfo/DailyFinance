'use strict';

angular.module('DailyFinanceApp')
  .controller('AddNewCtrl', function ($scope, $session, $api, $contentConfig, $location, $modalFactory) {
    var userId = $session.get('user').userId;

    $scope.contentConfig = $contentConfig.addNew;

    $scope.submit = function () {
      $api.create({
        userId: userId,
        payload: this.expense
      }).$promise.then(function () {
        $location.path('/');
      }, function () {
        // error
        $modalFactory.error();
      });
    };
  });
