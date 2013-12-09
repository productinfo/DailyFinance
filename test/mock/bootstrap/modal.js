var $modal = function (actionType) {
  return {
    retrievePasswordBox: function () {
      return {
        open: function () {
          return {
            result: {
              then: function (cb) {
                cb(actionType);
              }
            }
          }
        }
      };
    },
    messageBox: function () {
      return {
        open: function () {
          return {
            result: {
              then: function (cb) {
                cb(actionType);
              }
            }
          }
        }
      };
    }
  };
};
