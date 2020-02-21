const Joi = require("@hapi/joi");
const { md5 } = require("../../utils/util");
const { User, validateUser } = require("../../model/user");

module.exports = async (req, res, next) => {
  try {
    await validateUser(req.body);
    let user = await User.findOne({ username: req.body.username });
    let email = await User.findOne({ email: req.body.email });
    if (user) {
      return next(
        JSON.stringify({ path: "/admin/edt", message: "用户名已存在" })
      );
    }
    if (email) {
      return next(
        JSON.stringify({ path: "/admin/edt", message: "邮箱地址已注册" })
      );
    }
    req.body.password = md5(req.body.password);
    // 添加用户信息进入数据库
    await User.create(req.body);
    res.redirect("/admin/user");
  } catch (e) {
    next(JSON.stringify({ path: "/admin/edt", message: e.message }));
  }
};
