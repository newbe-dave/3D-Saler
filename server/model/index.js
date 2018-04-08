const DB = require('./db');
const sequelize = require("sequelize");

const User = DB.import('./User');
const Goods = DB.import('./Goods');
const Account = DB.import('./Account.js');
const GoodsType = DB.import('./GoodsType');
const Order = DB.import('./Order');
const UserRole = DB.import('./UserRole');

User.hasMany(Account);
UserRole.hasOne(User);
Account.belongsToMany(Goods, {as: 'Favourites', through: 'account_favourites'});
Account.hasMany(Order);
Goods.belongsToMany(Account, {as: 'Account', through: 'account_favourites'});
GoodsType.hasMany(Goods);
Order.belongsToMany(Goods, {as: 'Goods', through: 'goods_order'})
Goods.belongsToMany(Order, {as: 'Order', through: 'goods_order'})

DB.sync({force: true}).then(initDB).catch(err => {
    console.log('init failed')
});
// DB.sync();

function initDB() {
    UserRole.create({roleName: "normal"}).then(role => {
        User.create({userName: "gxd", userPwd: "$2a$10$T0o.elbaMMHPbQYd5OBcWebDpstw/Usd8qeJtLqXu8pYOM7r92jyG", userRoleId: role.id}).catch(err => {
            console.log("create user failed: " + err);
        })
    })
    GoodsType.create({typeName: "sha fa"}).then(type => {
        var id = type.id;
        Goods.create({goodsId: 123, goodsName: 'sha fa 1 hao', goodsUnitPirce: 10, goodsTypeId: id}).then(task => {});
        Goods.create({goodsId: 234, goodsName: 'sha fa 2 hao', goodsUnitPirce: 11, goodsTypeId: id}).then(task => {});
        Goods.create({goodsId: 345, goodsName: 'sha fa 3 hao', goodsUnitPirce: 12, goodsTypeId: id}).then(task => {});
    }).catch(err => {
        console.log(err);
    });
    GoodsType.create({typeName: "chu ju"}).then(type => {
        var id = type.id;
        Goods.create({goodsId: 456, goodsName: 'chu ju 1 hao', goodsUnitPirce: 13, goodsTypeId: id}).then(task => {});
        Goods.create({goodsId: 567, goodsName: 'chu ju 2 hao', goodsUnitPirce: 14, goodsTypeId: id}).then(task => {});
        Goods.create({goodsId: 678, goodsName: 'chu ju 3 hao', goodsUnitPirce: 15, goodsTypeId: id}).then(task => {});
    });
}
module.exports = {
    User: User,
    Goods: Goods,
    Account: Account,
    GoodsType: GoodsType,
    Order: Order,
    UserRole: UserRole
}
