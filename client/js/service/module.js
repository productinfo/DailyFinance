'use strict';

angular.module('uiModule', [
  'ui.bootstrap'
])
  .run(['$modal',
    function ($modal) {
      $modal.messageBox = function (title, message, buttons) {
        var messageBoxOpts = {
          templateUrl: 'views/modal/message.html',
          controller: 'MessageBoxCtrl',
          resolve: {
            model: function () {
              return {
                title: title,
                message: message,
                buttons: buttons
              };
            }
          }
        };
        console.log(messageBoxOpts);
        return {
          open: $modal.open.fill(messageBoxOpts)
        };
      };
    }
  ]);
