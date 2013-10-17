'use strict';

require('sugar');
var data = require('../data/data').data,
  Authentication = require('./authentication');
console.log(data);
module.exports = function (app) {

  app.get('/api/task', Authentication.ensureAuthenticated, function (req, res) {
    var userId = req.query.userId;
    var userData = data.find(function (obj) {
      return obj.userId == userId;
    });
    console.log(userData);
    res.json(userData.task);
  });

  app.post('/api/task', Authentication.ensureAuthenticated, function (req, res) {
    console.log(req);
    return null;
  });
};
