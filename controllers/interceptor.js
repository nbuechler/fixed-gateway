/**
 * GET /
 * Interceptor foo01 page.
 */

var fetchUrl = require("fetch").fetchUrl;

exports.logsOverview = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://localhost:5000/process-logs-overview/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.foo02 = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://localhost:5000/altdummy", options, function(error, meta, body){
    console.log(body.toString());
    res.send(body.toString());
  });
 //  res.render('foo/f01', {
 //    title: 'FOO 01'
 //  });
};
