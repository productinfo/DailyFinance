'use strict';

require('sugar');
var uuid = require('node-uuid'),
  ExpenseModel = require('../mongodb/model/expense').ExpenseModel,
  expenseCache = [];

module.exports = {
  getList: function (req, res) {
    var userId = req.query.userId;
    ExpenseModel.find({
      userId: userId
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

    if (data) {
      res.json(data);
    } else {
      res.send(404);
    }
  },
  update: function(req, res) {
    var expenseId = req.params.expenseId,
      userId = req.body.userId,
      name = req.body.name,
      price = req.body.price,
      date = req.body.date || '',
      time = req.body.time || '';

    ExpenseModel.update({
      userId: userId,
      expenseId: expenseId
    }, {
      name: name,
      price: price,
      date: date,
      time: time
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

    ExpenseModel.remove({
      userId: userId,
      expenseId: expenseId
    }, function (err) {
      if (err) {
        console.log(err);
        res.send(500);
      }
      res.send(200);
    });
  },
  batchDelete: function (req, res) {
    var userId = req.query.userId;
    ExpenseModel.remove({
      userId: userId
    }, function (err) {
      if (err) {
        console.log(err);
        res.send(500);
      }
      res.send(200);
    });
  },
  create: function (req, res) {
    var userId = req.body.userId,
      payload = req.body.payload,
      expenseId = uuid.v4();

    ExpenseModel.create({
      userId: userId,
      expenseId: expenseId,
      name: payload.name,
      price: payload.price,
      date: payload.date,
      time: payload.time
    }, function (err) {
      if (err) {
        console.log(err);
        res.send(500);
      }
      res.send(201);
    });
  }
};