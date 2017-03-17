var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Simple string literal route expression
app.get("/singapore/:name", function(request, response) {
  console.log(request.params);
  response.send("Welcome to Singapore, " + request.params.name);
});

// Simple regex route expression
app.get(/\/america/i, function(request, response) {
  response.send("Welcome to America");
});

// Regex with numbered parameter
app.get(/^\/russia\/(\d+)$/i, function(request, response) {
  response.send("Welcome to Russia, Agent #" + parseInt(request.params[0]));
});

// Regex with named parameter
app.get(/^\/:country(Thailand|Taiwan)$/, function(request, response) {
  response.send("Let's go to " + request.params.country);
});

app.use(function(request, response) {
  response.status(404).send("Resource not found");
});

app.listen(3000, function(){
  console.log("App started and listening...");
});
