'use strict';

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  uesrId: String,
  name: String,
  email: String,
  password: String
});

module.exports.UserSchema = UserSchema;