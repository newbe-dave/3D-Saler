const models = require('../model');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

let findGoodsByType = async (type) => {
    let results = await models.GoodsType.findAll({
        include: [{
            model: models.Goods,
            where: { 
                [Op.and]:{
                    goodsTypeId: Sequelize.col('goodsType.id')
                }   
            }
        }],
        where: {
            typeName: type
        }
    })
    return results[0].goods;
}

module.exports = {
    findGoodsByType
}