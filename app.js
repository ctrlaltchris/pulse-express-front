var express = require('express'),
session = require('express-session'),
mongoose = require('mongoose'),
passport = require('passport'),
User = require('./models/user'),
app = express(),
GithubStrategy = require('passport-github').Strategy;

app.set('view engine', 'ejs');

passport.use(new GithubStrategy({
    clientID: "68db031caf9e36804f74",
    clientSecret: "ca32d5027449efc089738f2d94118651171cee26",
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

// Express and Passport Session
app.use(session({secret: "funkytown"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

// main menu route
app.get('/', function (req, res) {
    res.render('index');
      // dump the user for debugging
    // if (req.isAuthenticated()) {
    //   html += "<p>authenticated as user: </p>"
    //   html += "<pre>" + JSON.stringify(req.user, null, 4) + "</pre>";
    // }

  // res.send(html);

});

app.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

// we will call this to start the GitHub Login process
app.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/music');
  }
);

// Simple middleware to ensure user is authenticated.
// Use this middleware on any resource that needs to be protected.
// If the request is authenticated (typically via a persistent login session),
// the request will proceed.  Otherwise, the user will be redirected to the
// login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // req.user is available for use here
    return next(); }

  // denied. redirect to login
  res.redirect('/');
}

app.get('/music', ensureAuthenticated, function(req, res) {
    res.render('music', {user: req.user});
});


passport.serializeUser(function(user, done) {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

var server = app.listen(3001, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address, server.address().port);
});
