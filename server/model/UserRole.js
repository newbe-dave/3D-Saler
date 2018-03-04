module.exports = (sequelize, DataTypes) => {
    return sequelize.define('userRole', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        roleName: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
    }, {
        freezeTableName: true,
        tableName: 'user_role',
        comment: '角色表'
    });
}