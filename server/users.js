'use strict';

require('sugar');

var users = [{
  id: 1,
  username: 'leo',
  password: 'pw'
}];

module.exports = {
  findById: function (id) {
    return users.find(function (user) {
      return user.id === id;
    });
  },
  findByUsername: function (username) {
    return users.find(function (user) {
      return user.username === username;
    });
  }
};
