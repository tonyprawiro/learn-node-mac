var express = require('express');
var app = express();

app.get('/singapore', function(request, response) {
  response.send("Welcome to Singapore");
});

app.use(function(request, response) {
  response.status(404).send("Resource not found");
});

app.listen(3000, function(){
  console.log("App started and listening...");
});
