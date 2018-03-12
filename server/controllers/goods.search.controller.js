const Service = require('../service/goods.search.service');

const getRecomended = async (ctx, next) => {
  ctx.response.type = 'text/html'
  let type = ctx.params.type;
  let results = await Service.searchAllRecomended(type);
  ctx.response.body = results;
  next();
}

module.exports = (router) => {
  router.get('/searchRecomendedGoods/:type', getRecomended)
}