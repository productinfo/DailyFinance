'use strict';

require('sugar');
var ExpenseModel = require('../mongodb/model/expense').ExpenseModel,
  expenseCache = [];

module.exports = {
  getList: function (req, res) {
    var userId = req.query.userId;
    ExpenseModel.find({
      uesrId: userId
    }, function (err, data) {
      if (err) {
        console.log(err);
        res.send(500);
      }

      expenseCache = data;
      res.json(data);
    });
  },
  getDetail: function (req, res) {
    var expenseId = req.params.expenseId,
      data = expenseCache.find(function (expense) {
        return expense.expenseId.toString() === expenseId;
      });
    console.log(data);
    if (data) {
      res.json(data);
    } else {
      res.send(500);
    }
  },
  update: function(req, res) {
    var userId = req.query.userId,
      expenseId = req.params.expenseId,
      payload = JSON.parse(req.query.payload);

    ExpenseModel.update({
      uesrId: userId,
      expenseId: expenseId
    }, {
      name: payload.name,
      price: payload.price,
      date: payload.date,
      time: payload.time
    }, function (err) {
      if (err) {
        console.log(err);
        res.send(500);
      }
      res.send(200);
    });
  },
  delete: function(req, res) {
    var userId = req.query.userId,
      expenseId = req.params.expenseId;
    console.log(expenseId, userId);
    res.send(200);
  },
  create: function (req, res) {
    var userId = req.query.userId;
    var payload = req.query.payload;
    console.log(userId);
    console.log(payload);
    res.send(200);
  }
};