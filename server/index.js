'use strict';

var express = require('express'),
  passport = require('passport'),
  app = express(),
  Authentication = require('./authentication');

app.use(express.logger('dev'));

app.use(function staticsPlaceholder(req, res, next) {
  return next();
});

app.use(express.cookieParser());
app.use(express.session({
  secret: 'world peace ~'
}));
app.use(express.bodyParser());

// setup passport authentication
app.use(passport.initialize());
app.use(passport.session());

passport.use(Authentication.localStrategy);
passport.serializeUser(Authentication.serializeUser);
passport.deserializeUser(Authentication.deserializeUser);

// login
app.post('/login', Authentication.login);

// logout
app.get('/logout', Authentication.logout);

app.get('/user', Authentication.ensureAuthenticated, function (req, res) {
  return res.json(req.session.user);
});

module.exports = app;
