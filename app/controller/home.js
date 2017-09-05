'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      console.log()
        this.ctx.body = this.ctx.session.passport;
    }
    * logout() {
      this.logout();
      console.log(this.logout());
      this.ctx.body = 'logout'
    }
  }
  return HomeController;
};
