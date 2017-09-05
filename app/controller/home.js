'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
        this.ctx.body = this.ctx.session.passport;
    }
  }
  return HomeController;
};
