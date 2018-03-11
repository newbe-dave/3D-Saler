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

// DB.sync({force: true});
DB.sync();

module.exports = {
    User: User,
    Goods: Goods,
    Account: Account,
    GoodsType: GoodsType,
    Order: Order,
    UserRole: UserRole
}
