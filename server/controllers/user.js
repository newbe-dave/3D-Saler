const getHello = async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html'
  ctx.response.body = ctx.params.id
}

module.exports = (router) => {
  router.get('/hello/:id', getHello)
}
