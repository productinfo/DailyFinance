'use strict';

var uuid = require('node-uuid'),
  UserModel = require('../mongodb/model/user').UserModel;

module.exports = {
  lostPassword: function(req, res) {
    var email = req.body.email;

    UserModel.find({
      email: email
    }, function (err, data) {
      if (err) {
        res.send(404);
      }
      console.log(data[0].password);
      res.send(200);
    });
  }
};