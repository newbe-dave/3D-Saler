const userService = require('../service/user.search.service');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs'); 

const getUserByName = async (ctx, next) => {
  ctx.response.type = 'text/html'
  const user = await userService.getUserByName(ctx.params.name);
  ctx.response.body = user;
  await next();
}

const postUserAuth = async (ctx, next) => {
  const data = ctx.request.body;
  const userInfo = await userService.getUserByName(data.name);

  if (userInfo != null) {
    if (!bcryptjs.compareSync(data.password, userInfo.userPwd)) {
    // if (userInfo.userPwd != data.password) {
      ctx.response.body = {
        success: false,
        info: "password invalid"
      };
    } else {
      const userToken = {
        name: userInfo.userName,
        id: userInfo.id
      }

      const secret = "cg-tower";
      const token = jwt.sign(userToken, secret);
      ctx.response.body = {
        success: true,
        token: token
      }
    }
  } else {
    ctx.response.body = {
      success: false,
      info: "user invalid"
    }
  }
}

module.exports = (router) => {
  router.get('/user/get/:name', getUserByName)
  router.post('/user', postUserAuth);
}
