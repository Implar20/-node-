const { User } = require("../../model/user");
const { md5 } = require("../../utils/util");

module.exports = async (req, res, next) => {
  let { username, email, role, state, password } = req.body;
  let { id } = req.query;

  let user = await User.findById({ _id: id });
  if (md5(password) === user.password) {
    await User.updateOne(
      { _id: id },
      {
        username: username,
        email: email,
        role: role,
        state: state
      }
    );
    res.redirect("/admin/user");
  } else {
    next(
      JSON.stringify({
        path: "/admin/edt",
        message: "密码比对错误，不能进行修改",
        id
      })
    );
  }
};
