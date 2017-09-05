// app.js
module.exports = app => {
    class CustomController extends app.Controller {
        get user() {
            return '123'
        }
        success(data) {
            this.ctx.body = {
                success: true,
                data,
            };
        }
        notFound(msg) {
            msg = msg || 'not found';
            this.ctx.throw(404, msg);
        }
    }
    app.Controller = CustomController;
}