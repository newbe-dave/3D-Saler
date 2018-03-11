const models = require('../model');

let searchAllRecomended = async () => {
    let results = await models.Goods.findAll();
    return results;
}

module.exports = {
    searchAllRecomended
}