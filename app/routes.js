// require express
var express = require('express');

//create our router object
var router = express.Router();

// export out router
module.exports = router;

// route for homepage
router.get('/', function(req,res) {
  res.render('pages/index');
});

// route for about page
router.get('/about', function(req,res) {
  var users = [
    { name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/300/300'},
    { name: 'Chris', email: 'chris@scotch.io', avatar: 'http://placekitten.com/400/400'},
    { name: 'Ado', email: 'Ado@scotch.io', avatar: 'http://placekitten.com/500/500'},
    { name: 'Samantha', email: 'Samantha@scotch.io', avatar: 'http://placekitten.com/700/700'}
  ];
  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});
router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.message + '! We will respond shortly!');
});

