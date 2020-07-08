var express = require('express');
var router = express.Router();
var passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../../config/googleOath2');
const oauth2Controller = require('../../api/controllers/oauth2Controller');
var FortyTwoStrategy = require('passport-42').Strategy;

const userDao = require('../daos/userDao/userDao')


/**
 * Jwt Passport for secure routes
 * ex : Authorization : bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQ2xpZW50IiwiX2lkIjoiNWUzN2NkMGI4YTAxNjEwNWNhMmFjZjYwIiwiZW1haWwiOiJwcmFqYWt0YUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRzWXN4MGcyWGsybWdSTHNaZXBEYkV1MklRcGhVOURkNnczeTBHaUxMWHJVeW5aazlUR0xKSyIsIl9fdiI6MCwiaWF0IjoxNTgwNzE5ODE3LCJleHAiOjE1ODA3Mjk4OTd9.38x2wztqJWz9EH8_lN0ca-L-8mTQvW36iF2bfGk_ydg
 */
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_KEY;
passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {

  userDao.getUserById(jwtPayload.id)
    .then(data => {
      if (data)
        return done(null, data)
      else
        return done(null, false);
    })
    .catch((err) => { return done(null, false); });

})
);
// End of :  Jwt Passport for secure routes

passport.serializeUser((user, done) => {
  done(null, user);
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use(new GoogleStrategy({
  clientID: keys.clientId,
  clientSecret: keys.clientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}))


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

// Googe Oauth2
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// Google Oauth2 callback url
router.get('/auth/google/callback', passport.authenticate('google'), oauth2Controller.googleOauth2);



// 42
passport.use(new FortyTwoStrategy({
  clientID: `f70297f82626c75530095926c74be94b13125f221dfaeb84939af7eb5e577aa2`,
  clientSecret: `283224cfe2096e88b44006727c3a2797cc187b73fe3467df07833448eef9d9f2`,
  callbackURL: '/auth/42/callback'
},
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));


router.get('/login/42',
  passport.authenticate('42'));

router.get('/auth/42/callback',
  passport.authenticate('42', { failureRedirect: '/login' }),
  oauth2Controller.Oauth2Via42);


module.exports = router;
