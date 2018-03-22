const userService = require('../service/user.search.service');

const getUserByName = async (ctx, next) => {
  ctx.response.type = 'text/html'
  const user = await userService.getUserByName(ctx.params.name);
  ctx.response.body = user;
  await next();
}

module.exports = (router) => {
  router.get('/user/get/:name', getUserByName)
}
