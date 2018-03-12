const dao = require('../dao/goods.search.dao');

let searchAllRecomended = async (type) => {
    let results = await dao.findGoodsByType(type);
    return results;
}

module.exports = {
    searchAllRecomended
}