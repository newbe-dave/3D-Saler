module.exports = (sequelize, DataTypes) => {
    return sequelize.define('goodsType', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        typeName: {
            type: Datatypes.STRING(64),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        tableName: 'goods_type',
        comment: '商品类型表'
    });
}