const models = require('../model');

const getHello = async (ctx, next) => {
  ctx.response.type = 'text/html'
  ctx.response.body += ctx.params.id + '@@';
  await models.User.create({userName: ctx.params.id, userPwd: 'admin'}).then(user => {
    ctx.response.body += user.id;
  });
  await next();
}

module.exports = (router) => {
  router.get('/hello/:id', getHello)
}
