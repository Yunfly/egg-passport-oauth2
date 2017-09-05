'use strict';

/*
exports.info = async function(ctx) {
    const userId = ctx.params.id;
    const userInfo = await ctx.service.user.find(userId);
    ctx.body = userInfo
};
*/

const Controller = require('egg').Controller;
module.exports = class InfoController extends Controller{
    async info(){
        const ctx = this.ctx;
        const userId = ctx.params.id;
        const userInfo = await ctx.service.user.find(userId);
        ctx.body = userInfo;
    }
};
