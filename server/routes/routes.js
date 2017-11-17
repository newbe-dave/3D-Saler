const router = require("koa-router")();
const hello = require("../controllers/user");

hello(router);


router.use("/api", router.routes());
module.exports = router;