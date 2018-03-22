const models = require('../model');

const getUserByName = async (name) => {
    const User = models.User;
    let user = await User.findOne({where: {userName: name}});
    return user;
}

module.exports = {
    getUserByName
}

