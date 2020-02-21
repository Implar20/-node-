const { User } = require("../../model/user");

module.exports = async (req, res) => {
  // 标识
  req.app.locals.currentLink = 'user'

  let offset = req.query.offset || 1;
  let pageSize = 8;

  let count = await User.countDocuments({});
  let total = Math.ceil(count / pageSize);

  let start = (offset - 1) * pageSize;

  let users = await User.find({})
    .limit(pageSize)
    .skip(start);
  res.render("admin/user", {
    users,
    offset,
    total
  });
};
