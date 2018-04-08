const Koa = require("koa2");
const Json = require("koa-json");
const Logger = require("koa-logger");
const bodyParser = require("koa-bodyparser")();
const path = require("path");
const server = require("koa-static");
const jwtKoa = require("koa-jwt");

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

// app.use(async (ctx, next) => {  //  如果JWT验证失败，返回验证失败信息
//     try {
//       await next;
//     } catch (err) {
//       if (401 == err.status) {
//         this.status = 401;
//         ctx.body = {
//           success: false,
//           token: null,
//           info: 'Protected resource, use Authorization header to get access'
//         };
//       } else {
//         throw err;
//       }
//     }
//   });

app.use(jwtKoa({secret: 'cg-tower'}).unless({path:[/^\/auth/]}));

const allRoutes = require("./server/routes/routes");
app.use(allRoutes.routes())

app.listen(8889, () => {
    console.log("Koa2 is listening in 8889");
});

module.exports = app;