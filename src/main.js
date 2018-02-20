var express = require('express');
var app = express();

var service = require('./service').get;

app.get('/', function (req, res) {
	
  service(req.tenant).findAll().then(l => {
	  res.send(l)
	});

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

