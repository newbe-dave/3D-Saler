var Sequelize = require("sequelize");

var seq = new Sequelize('tms3db', 'tms3owner', 'tms3owner', {
    host: 'spsdemo-w7',
    dialect: 'mysql',
    pool: {
        max: 20,
        min: 0,
        idle: 10000
    }
});

seq
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


seq.query("select * from SPS_CHARGE_DETAIL d, sps_charge_sum sa , sps_order o where sa.order_id = o.order_id and o.no = '99920008529' and d.CHARGE_SUM_ID = sa.CHARGE_SUM_ID", {plain: true}).then(projects => {
    console.log(projects);
});
