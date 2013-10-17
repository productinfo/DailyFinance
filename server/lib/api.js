'use strict';

require('sugar');
var data = require('../data/data').data,
  Authentication = require('./authentication');

module.exports = function (app) {

  app.get('/api/expense', Authentication.ensureAuthenticated, function (req, res) {
    var userId = req.query.userId;
    var userData = data.find(function (obj) {
      return obj.userId === userId;
    });
    res.json(userData.expense);
  });

  app.post('/api/expense', Authentication.ensureAuthenticated, function (req, res) {
    var userId = req.query.userId;
    var payload = req.query.payload;
    console.log(userId);
    console.log(payload);
    res.send(200);
  });
};
