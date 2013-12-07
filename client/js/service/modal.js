'use strict';

function app$$modalFactory($modal) {
  return {
    error: function (title, message) {
      var title = title || 'Error',
        message = message || 'Internal server error...';
      $modal.messageBox(title, message, [{
        label: 'Close',
        cssClass: 'btn-primary',
        result: 'ok'
      }])
        .open();
    }
  };
}

angular.module('DailyFinanceApp')
  .factory('$modalFactory', ['$modal', app$$modalFactory]);
