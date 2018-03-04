module.exports = (sequelize, DataTypes) => {
    return sequelize.define('goods', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        goodsId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        goodsName: {
            type: Datatypes.STRING(64),
            allowNull: false
        },
        goodsDescription: DataTypes.STRING(200),
        goodsUnitPirce: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        tableName: 'goods',
        comment: '商品表'
    });
}