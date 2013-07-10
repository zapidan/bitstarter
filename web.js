var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var fs = require('fs');
 var textFromFile = fs.readFileSync("index.html");
  response.send(textFromFile.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
