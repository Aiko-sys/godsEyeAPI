var express = require('express');
var app = express();


var testRouter = require("./routes/test/route.test.js")

app.use('/test', testRouter)


module.exports = app;
