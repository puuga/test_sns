var express = require('express');
var sns = require('./sns.js');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/form', function(req, res) {
  // res.send('Hello World!');
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/sns', function(req, res) {

  var message = req.body.message;
  var subject = req.body.subject;

  sns.publish(message, subject);
  var result = "Message: " + message + "<br/>";
  result += "Subject: " + subject + "<br/>";
  result += "Message published!";
  res.send(result);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
