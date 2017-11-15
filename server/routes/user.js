const hello = require("../controllers/user");
const router = require("koa-router")();

hello(router);
router.use("/api", router.routes());

module.exports = router;