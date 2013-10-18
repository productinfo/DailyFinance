'use strict';

require('sugar');
var data = require('../data/data').data;

module.exports = {
  getList: function (req, res) {
    var userId = req.query.userId;
    var userData = data.find(function (obj) {
      return obj.userId === userId;
    });
    res.json(userData.expenses);
  },
  getDetail: function (req, res) {
    var expenseId = req.query.expenseId;
    console.log(expenseId);
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