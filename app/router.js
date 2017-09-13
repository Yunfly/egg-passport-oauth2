'use strict';

module.exports = app => {

    // custom options.login url and options.successRedirect

  app.get('/',app.passport.authenticate('Yun9'), 'home.index');
  app.get('/auth/callback',app.passport.authenticate('Yun9',{
    successRedirect: '/home',
    failureRedirect: '/login'
  }),  'home.index');
  app.get('/home', 'home.index');
};
