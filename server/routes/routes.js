const Router = require("koa-router");
const user = require("../controllers/user.controller");
const searchGoods = require('../controllers/goods.search.controller.js');

let auth = new Router();
user(auth);

let routes = new Router();
searchGoods(routes)

let apiRouter = new Router();
apiRouter.use("/auth", auth.routes());
apiRouter.use("/api", routes.routes());
module.exports = apiRouter;