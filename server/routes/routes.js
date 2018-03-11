const Router = require("koa-router");
const hello = require("../controllers/user.controller");
const searchGoods = require('../controllers/goods.search.controller.js');

let routes = new Router();
hello(routes);
searchGoods(routes)

let apiRouter = new Router();
apiRouter.use("/api", routes.routes());
module.exports = apiRouter;