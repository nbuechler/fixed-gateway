/**
 * GET /
 * Interceptor page.
 */

var fetchUrl = require("fetch").fetchUrl;

/**
 * GET /
 * Interceptor logs methods.
 */

exports.logsOverview = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://localhost:5000/logs/overview/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.characterLengths = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://localhost:5000/logs/character_lengths/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    res.send(body.toString());
  });
 //  res.render('foo/f01', {
 //    title: 'FOO 01'
 //  });
};

exports.wordLengths = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://localhost:5000/logs/word_lengths/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};


/**
 * GET /
 * Interceptor experiences methods.
 */

exports.experiencesOverview = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://localhost:5000/experiences/overview/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.experiencesStatistics = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://localhost:5000/experiences/statistics/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

/**
 * GET /
 * Interceptor activities methods.
 */

exports.activitiesOverview = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://localhost:5000/activities/overview/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.activitiesStatistics = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://localhost:5000/activities/statistics/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};
