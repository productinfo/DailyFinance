var AuthenticationService = {
  login: function () {
    return {
      success: function (cb) {
        if (cb) {
          cb();
        }
      }
    };
  },
  logout: function () {
    return {
      success: function (cb) {
        if (cb) {
          cb();
        }
      }
    };
  }
};