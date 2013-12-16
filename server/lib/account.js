'use strict';

var uuid = require('node-uuid'),
  ExpenseModel = require('../mongodb/model/expense').ExpenseModel,
  UserModel = require('../mongodb/model/user').UserModel;

module.exports = {
  delete: function (req, res) {
    var userId = req.query.userId, hasError = false;

    // delete users' data
    ExpenseModel.remove({
      userId: userId
    }, function (err) {
      if (err) {
        console.log(err);
        hasError = true;
      }
    });

    // delete user's profile
    UserModel.remove({
      userId: userId
    }, function (err) {
      if (err) {
        console.log(err);
        hasError = true;
      }
    });

    if (hasError) {
      res.send(500);
    } else {
      res.send(200);
    }
  },
  create: function (req, res) {
    var name = req.body.name,
      email = req.body.email,
      password = req.body.password;

    UserModel.create({
      userId: uuid.v4(),
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