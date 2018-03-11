const Router = require("koa-router");
const hello = require("../controllers/user.controller");

let routes = new Router();
hello(routes);

let apiRouter = new Router();
apiRouter.use("/api", routes.routes());
module.exports = apiRouter;