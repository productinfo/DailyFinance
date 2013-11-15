'use strict';

var uuid = require('node-uuid'),
  UserModel = require('../mongodb/model/user').UserModel;

module.exports = {
  create: function (req, res) {
    var name = req.query.name,
      email = req.query.email,
      password = req.query.password;
    UserModel.create({
      uesrId: uuid.v4(),
      name: name,
      email: email,
      password: password
    }, function (err) {
      if (err) {
        console.log(err);
        res.send(500);
      }
      res.send(201);
    });
  }
};