var newrelic = require('newrelic');
var express = require('express');
var serve = express();
serve.locals.newrelic = newrelic;
serve.use(express.static(__dirname + '/web'));
serve.set('port', (process.env.PORT || 3000));
serve.listen(serve.get('port'), function () {
  console.log('Node app of CCC is running at localhost:' + serve.get('port'));
});
