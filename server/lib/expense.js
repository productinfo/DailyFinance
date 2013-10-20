'use strict';

require('sugar');
var ExpenseModel = require('../mongodb/model/expense').ExpenseModel;

module.exports = {
  getList: function (req, res) {
    var userId = req.query.userId;
    ExpenseModel.find({
      uesrId: userId
    }, function (err, data) {
      if (err) {
        res.send(500);
      }
      res.json(data);
    });
  },
  getDetail: function (req, res) {
    console.log(req.query);
    console.log(req.params);
    var expenseId = req.params.expenseId;
    res.send(200);
  },
  createNew: function (req, res) {
    var userId = req.query.userId;
    var payload = req.query.payload;
    console.log(userId);
    console.log(payload);
    res.send(200);
  }
};