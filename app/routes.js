// require express
var express = require('express');

//create our router object
var router = express.Router();

// export out router
module.exports = router;

// route for homepage
router.get('/', function(req,res) {
  res.send('hello world!');
});

// route for about page
router.get('/about', function(req,res) {
  res.send('hello on the about page!');
});

router.get('/contact');
router.post('/contact');

