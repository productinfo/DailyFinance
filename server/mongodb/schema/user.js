'use strict';

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  password: String
});

module.exports.UserSchema = UserSchema;