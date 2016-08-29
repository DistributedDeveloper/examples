var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get("/ping", function(req, res) {
    res.status(200).end('{"response": "pong"}');
});

app.listen(8080, function () {
  console.log('Example app listening on port ' + port + '!');
});
