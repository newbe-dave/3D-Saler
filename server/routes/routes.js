const Router = require("koa-router");
const user = require("../controllers/user.controller");
const searchGoods = require('../controllers/goods.search.controller.js');

let routes = new Router();
user(routes);
searchGoods(routes)

let apiRouter = new Router();
apiRouter.use("/api", routes.routes());
module.exports = apiRouter;