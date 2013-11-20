var setting = require('./setting'),
  emailjs = require('emailjs'),
  server;

server  = emailjs.server.connect({
   user: setting.user,
   password: setting.password,
   host: setting.host,
   ssl: true
});

module.exports = {
  sendOutEmail: function(account, callback) {
    server.send({
      from         : setting.sender,
      to           : account.email,
      subject      : '[DailyFinance Web App] Password Reset',
      attachment   : this.composeEmail(account)
    }, callback);
  },
  composeEmail: function(account) {
    var html;
    html = '<!doctype html><html><body>'
      + 'Hello ' + account.name + ',<br><br>'
      + 'Your password is :: <b> ' + account.password + '</b><br><br>'
      + 'Have fun!<br>'
      + '<a href="http://leoj.net">Leo</a><br><br>'
      + '<body><html>';
    return [{
      data: html,
      alternative: true
    }];
  }
};