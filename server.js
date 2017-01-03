/////////////// WITHOUT EXPRESS //////////////////////////


// // import http module
// var http = require('http');

// // handle sending requests and returning response 
// function handleRequests(req, res) {
//   // return string
//   res.end("Hello World!");
// }

// // create the server
// var server = http.createServer(handleRequests);

// // start server and listen on port 
// server.listen(8080, function() {
//   console.log("Listening on port 8080");
// });


///////////////////// WITH EXPRESS /////////////////////

// require our dependencies
var express = require('express');
var app = express();
var port = 8080;

//start the server
app.listen(port, function() {
  console.log('App started');
});

// route for homepage
app.get('/', function(req,res) {
  res.send('hello world!');
});

// route for about page
app.get('/about', function(req,res) {
  res.send('hello on the about page!');
});

app.get('/contact');
app.post('/contact');