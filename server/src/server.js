var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

app.get('/hello', function (req, res) {
  setTimeout(function(){ res.json({
  	'message': 'Hello world!'
  })}, 1000)
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
