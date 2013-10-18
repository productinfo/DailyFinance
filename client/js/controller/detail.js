'use strict';

angular.module('DailyFinanceApp')
  .controller('DetailCtrl', function ($scope, $api, $contentConfig) {
    $scope.contentConfig = $contentConfig.detail;
  });
