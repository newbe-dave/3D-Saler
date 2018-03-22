const userDao = require('../dao/user.search.dao')

const getUserByName = async (name) => {
    return await userDao.getUserByName(name);
}

module.exports = {
    getUserByName
}