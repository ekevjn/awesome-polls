var express = require('express');
var router = express.Router();

var env = {
};

router.get('/', function(req, res, next) {
  res.render('index', { env: env });
});

router.get('/login',function(req, res){
  res.render('login', { env: env });
});

router.get('/logout',function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/polls', function(req, res){
  request('http://elections.huffingtonpost.com/pollster/api/charts.json?topic=2016-president', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var polls = JSON.parse(body);
      // For this view, we are not only sending our environmental information, but the polls and user information as well.
      res.render('polls', {env: env, user: req.user, polls: polls});
    } else {
      res.render('error');
    }
  })
})

router.get('/user', function(req, res, next) {
  res.render('user', { env: env, user: req.user });
});

module.exports = router;

