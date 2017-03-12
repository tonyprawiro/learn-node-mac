var express = require('express');
var path = require('path');
var fs = require('fs');
var morgan = require('morgan');

var app = express();

// DIY logging middleware
// app.use(function(request, response, next) {
//   console.log("Request: " + request.url + " " + new Date());
//   next();
// });

// Use morgan for logging
app.use(morgan('short'));

// DIY static file middleware v1
// app.use(function(request, response, next){
//   var filePath = path.join(__dirname, "static", request.url);
//   fs.stat(filePath, function(err, fileInfo) {
//     if (err) {
//       next();
//       return;
//     }
//
//     if (fileInfo.isFile()) {
//       response.sendFile(filePath);
//     } else {
//       next();
//     }
//   })
// });

// DIY static file middleware v2
// app.use(function(request, response, next) {
//     var filePath = path.join(__dirname, "static", request.url);
//     fs.stat(filePath, function(err, fileInfo) {
//       if (err) {
//         next(new Error("Error stat"));
//       }
//
//       if (fileInfo !== undefined) {
//         if (fileInfo.isFile()) {
//           response.sendFile(filePath, function(err) {
//             next(new Error("Error sending file"));
//           });
//         } else {
//           next();
//         }
//       } else {
//         next(new Error("Error file probably doesn't exist"));
//       }
//
//     });
// });

// Use Express' default static file middleware to send static files
var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

// Last middleware to handle 404
app.use(function(request, response, next) {
  response.status(404);
  response.send("File not found");
});

// Error-handling middleware (to be used in conjunction with the static middleware v2)
app.use(function(err, request, response, next) {
  console.error(err);
  response.status('500');
  response.send("Internal server error");
  //next(err); // continue to the next error-handling middleware
});

app.listen(3000, function(){
  console.log("App listening..");
});
