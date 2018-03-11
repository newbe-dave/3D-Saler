
const Service = require('../service/goods.search.service');

const getRecomended = async (ctx, next) => {
  ctx.response.type = 'text/html'
  let results = await Service.searchAllRecomended();
  ctx.response.body = results;
  next();
}

module.exports = (router) => {
  router.get('/searchRecomendedGoods', getRecomended)
}