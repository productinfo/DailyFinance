'use strict';

var UserModel = require('../mongodb/model/user').UserModel,
  emailManager = require('../email/email');

module.exports = {
  retrievePassword: function(req, res) {
    var email = req.body.email;
    UserModel.find({
      email: email
    }, function (err, data) {
      if (err) {
        res.send(500);
      }
      if (data.length > 0) {
        emailManager.sendOutEmail(data[0]);
        res.send(200);
      } else {
        res.send(404);
      }
    });
  }
};