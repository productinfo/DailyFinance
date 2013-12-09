'use strict';

angular.module('DailyFinanceApp')
  .controller('MessageBoxCtrl', function ($scope, $modalInstance, model) {
    $scope.title = model.title;
    $scope.message = model.message;
    $scope.buttons = model.buttons;
    $scope.close = function (res) {
      $modalInstance.close(res);
    };
  })
  .controller('retrievePasswordBoxCtrl', function ($scope, $modalInstance, model) {
    $scope.title = model.title;
    $scope.message = model.message;
    $scope.placeholder = model.placeholder;
    $scope.error = '';
    $scope.close = function (res) {
      if (res === 'ok') {
        $modalInstance.close(res);
      } else {
        var email = $scope.$$childTail.email;
        var result = {};
        if (email) {
          result.type = res;
          result.email = email;
          $modalInstance.close(result);
        } else {
          $scope.error = model.error;
        }
      }
    };
  });
