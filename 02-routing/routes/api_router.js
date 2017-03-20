var express = require('express');

var api = express.Router();

api.get('/country', function(req, res, next) {
  var obj = {
    'countries': [
      'Singapore',
      'America',
      'Russia',
      'Thailand',
      'Taiwan'
    ]
  }
  res.send(JSON.stringify(obj));
});

api.use(function(req, res) {
  res.status(404).send("Not found");
});

module.exports = api;
