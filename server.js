// require our dependencies
var express          = require('express');
var expressEJSLayouts= require('express-ejs-layouts');
var bodyParser       = require('body-parser');
var app              = express();
var port             = 8080;

// use ejs and express layouts
// needs to go above router!
app.set('view engine', 'ejs');
app.use(expressEJSLayouts);

// use body-parser
app.use(bodyParser.urlencoded());

// route our app
var router = require('./app/routes');
app.use('/', router);

// set static files (css, images, etc) location
app.use(express.static(__dirname + '/public'));


//start the server
app.listen(port, function() {
  console.log('App started');
});