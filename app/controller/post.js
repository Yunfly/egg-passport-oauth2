'use strict';

const Controller = require('egg').Controller;
module.exports = class CookieController extends Controller {
    async add() {
        const ctx = this.ctx;
        ctx.body = ctx.cookie
    }
};


