const { User } = require("../../model/user");
const { md5 } = require("../../utils/util");

module.exports = async (req, res) => {
  let { username, password } = req.body;

  // 验证逻辑
  if (username.trim().length === 0 || password.trim().length === 0) {
    return res.status(400).render("admin/error", { msg: "邮件地址或密码错误" });
  }
  // 数据库 (DAO) 操作
  let user = await User.findOne({ username });
  if (user) {
    let passhash = md5(password);
    if (user.password === passhash) {
      req.session.username = user.username;
      req.session.role = user.role
      req.app.locals.userInfo = user;
      if (user.role === "admin") {
        res.status(200).redirect("/admin/user");
      } else {
        res.redirect('/home/')
      }
    } else {
      res.status(400).render("admin/error", { msg: "邮件地址或密码错误" });
    }
  } else {
    res.status(400).render("admin/error", { msg: "邮件地址或密码错误" });
  }
};
