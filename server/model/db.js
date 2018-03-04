var Sequelize = require("sequelize");
var dbconfig = require("./config/localdb.js");

var db = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.pwd, {
    host: dbconfig.host,
    dialect: 'mysql',
    pool: {
        max: 20,
        min: 0,
        idle: 10000
    }
});

module.exports = db;

// db
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });


