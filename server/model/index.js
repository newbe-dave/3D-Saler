const DB = require('./db');
const sequelize = require("sequelize");

const User = DB.import('./User');

User.sync({force:true});

module.exports = {
    User: User
}
