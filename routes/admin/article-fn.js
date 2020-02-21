const { Article } = require("../../model/article");

module.exports = async (req, res) => {
  let { id } = req.query;
  let { cover, title, publishDate, content, author } = req.body;
  await Article.updateOne(
    {
      _id: id
    },
    {
      cover,
      title,
      publishDate,
      content
    }
  );
  res.redirect("/admin/article");
};
