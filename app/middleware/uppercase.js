'use strict';

module.exports = () => {
	return async function (ctx, next) {
		ctx.query.name = ctx.query.name && ctx.query.name.toUpperCase();
		next();
	};
};
