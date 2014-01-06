'use strict';

var uuid = require('node-uuid'),
  RSVP = require('rsvp'),
  ExpenseModel = require('../mongodb/model/expense').ExpenseModel,
  UserModel = require('../mongodb/model/user').UserModel,
  createAccount = function(email) {
    var promise = new RSVP.Promise(function (resolve, reject) {
      // verify email has been register or not
      UserModel.find({
        email: email
      }, function(err, data) {
        if (err) {
          console.log(err);
          reject(500);
        }
        if (data.length === 0) {
          resolve();
        } else {
          // email taken
          reject(400);
        }
      });
    });
    return promise;
  };

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

    createAccount(email).then(function () {
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
    }, function (errCode) {
      res.send(errCode);
    });
  }
};