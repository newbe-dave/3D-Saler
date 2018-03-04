const Koa = require("koa2");
const router = require("koa-router")();
const Json = require("koa-json");
const Logger = require("koa-logger");
const bodyParser = require("koa-bodyparser")();
const path = require("path");
const server = require("koa-static");

const app = new Koa();

app.use(bodyParser);
app.use(Json());
app.use(Logger());
app.use(server(path.resolve('dist')));

app.use(async (ctx, next) => {
    let start = new Date;
    await next();
    let ms = new Date - start;
    console.log("%s %s - %s", this.method, this.url, ms);
});

app.on("error", function(err, ctx) {
    console.log("server error", err);
});

const allRoutes = require("./server/routes/routes");
const hello = require("./server/controllers/user");

hello(router);

router.use("/api", router.routes(), router.allowedMethods());
// app.use(allRoutes.routes())
app.use(router.routes())

app.listen(8889, () => {
    console.log("Koa2 is listening in 8889");
});

module.exports = app;