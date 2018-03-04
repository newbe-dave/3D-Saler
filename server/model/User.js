module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        userPwd: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        userEmail: DataTypes.STRING(64),
        userPhone: DataTypes.STRING(20)
    }, {
        freezeTableName: true,
        tableName: 'user',
        comment: '用户表'
    });
}