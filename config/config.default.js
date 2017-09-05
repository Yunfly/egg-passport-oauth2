'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1502689943195_3979';

  // add your config here
  config.passportYun9 = {
    key: 'Y9E9LR8GV0QW',
    secret: 'jWGKoEljJvFfmvls252vtJvOb9g401',
    callbackURL: 'http://localhost:9083/auth/callback',
    authorizationURL:'http://authdev.yun9.com/oauth/authorize',
    tokenURL:'http://authdev.yun9.com/oauth/token'
  };
  return config;
};
