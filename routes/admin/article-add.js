const { Article } = require("../../model/article");

module.exports = async (req, res) => {
  let data = req.body;
  await Article.create(data);
  res.redirect("/admin/article");
};
