'use strict';

module.exports = function* (ctx) {
  ctx.body = `search: ${ctx.query.name}`;
};
