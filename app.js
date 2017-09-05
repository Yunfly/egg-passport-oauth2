'use strict';
const debug = require('debug')('egg-passport-twitter');
const assert = require('assert');
const OAuth2Strategy = require('passport-oauth2').Strategy;

module.exports = app => {
  const config = app.config.passportYun9;
  // must set passReqToCallback to true
  config.passReqToCallback = true;
  console.log(config)
  assert(config.key, '[egg-passport-Yun9] config.passportYun9.key required');
  assert(config.secret, '[egg-passport-Yun9] config.passportYun9.secret required');

  config.clientID = config.key;
  config.clientSecret = config.secret;

  app.passport.use('Yun9',new OAuth2Strategy(config,
    function(req,accessToken, refreshToken, profile, done) {
      const user = {
        accessToken:accessToken,
        refreshToken:refreshToken
      };
      debug('%s %s get user: %j', req.method, req.url, user);
      console.log('doVerify');
      app.passport.doVerify(req, user, done);
    }
  ));

};