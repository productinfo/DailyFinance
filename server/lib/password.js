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
        res.send(404);
      }
      console.log(data);
      emailManager.sendOutEmail(data[0]);
      res.send(200);
    });
  }
};