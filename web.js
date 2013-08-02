var fs =  require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var content = fs.readFileSync('index.html', "utf8");

var output = Buffer(content).toString(); 

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
