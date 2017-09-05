'use strict';

const Controller = require('egg').Controller;
class PostConstroller extends Controller{

  async index(){
    const { ctx } = this;
    return ctx.body = {
      a:1
    }
  }
}