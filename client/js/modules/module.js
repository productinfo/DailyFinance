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

        return {
          open: $modal.open.fill(messageBoxOpts)
        };
      };

      $modal.retrievePasswordBox = function (title, message, inputPlaceholder) {
        var messageBoxOpts = {
          templateUrl: 'views/modal/retrievePassword.html',
          controller: 'retrievePasswordBoxCtrl',
          resolve: {
            model: function () {
              return {
                title: title,
                message: message,
                placeholder: inputPlaceholder
              };
            }
          }
        };

        return {
          open: $modal.open.fill(messageBoxOpts)
        };
      };
    }
  ]);
