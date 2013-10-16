'use strict';

require('sugar');
var data = require('../data/data'),
  Authentication = require('./authentication'),
  request = require('request');
console.log(data);
module.exports = function (app) {

  app.get('/api/user', Authentication.ensureAuthenticated, function (req, res) {

  });

  app.post('/api/task', Authentication.ensureAuthenticated, function (req, res) {
    console.log(req);
    return null;
  });
};
