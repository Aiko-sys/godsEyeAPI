var express = require('express');
var indexRouter = require('./routes/index');
var app = express();

app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
