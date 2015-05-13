var newrelic = require('newrelic');
var express = require('express');
var serve = express();
var airbrake = require('airbrake').createClient('4204c1cac40d6868804fbb7ac47382b4');
airbrake.handleExceptions();
serve.locals.newrelic = newrelic;
serve.use(express.static(__dirname + '/web'));
serve.set('port', (process.env.PORT || 3000));
serve.listen(serve.get('port'), function () {
  console.log('Node app of CCC is running at localhost:' + serve.get('port'));
});
