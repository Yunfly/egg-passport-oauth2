'use strict';

module.exports = app => {

    // custom options.login url and options.successRedirect

  app.get('/',app.passport.authenticate('Yun9'), 'home.index');
  app.get('/auth/callback',app.passport.authenticate('Yun9',{
    successRedirect: '/home',
    failureRedirect: '/login'
  }),  'home.index');
  app.get('/home',  'home.index');
  app.get('s', '/search', app.middlewares.uppercase(), app.controller.search);
  app.get('/user/:id', 'user.info');
  app.redirect('/home', '/');
  app.get('/logout','home.logout');
  app.resources('/posts','posts');
};
