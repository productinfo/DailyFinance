'use strict';

require('sugar');
var data = require('../data/data').data;

module.exports = {
  getList: function (req, res) {
    var userId = req.query.userId;
    var userData = data.find(function (obj) {
      return obj.userId === userId;
    });
    res.json(userData.expense);
  },
  // getDetail: function (req, res) {

  // },
  createNew: function (req, res) {
    var userId = req.query.userId;
    var payload = req.query.payload;
    console.log(userId);
    console.log(payload);
    res.send(200);
  }
};