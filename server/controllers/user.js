const getHello = async (ctx, next) => {
  ctx.response.type = 'text/html'
  ctx.response.body = 'hello from server 2'
}

module.exports = (router) => {
  router.get('/hello', getHello)
}
