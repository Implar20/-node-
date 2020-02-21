const { User } = require("../../model/user");

module.exports = async (req, res) => {
  let { message, id } = req.query;

  req.app.locals.currentLink = "user";

  if (id) {
    // 查询修改
    let user = await User.findById({ _id: id });
    res.render("admin/user-edit.art", {
      message,
      id,
      user,
      link: "/admin/edt?id=" + id,
      btnText: "修改"
    });
  } else {
    // 增加
    res.render("admin/user-edit.art", {
      message,
      id,
      link: "/admin/add",
      btnText: "添加"
    });
  }
};
