const { Article } = require("../../model/article");

module.exports = async (req, res) => {
  req.app.locals.currentLink = "article";
  let { id } = req.query;
  if (id) {
    let article = await Article.findById({ _id: id }).populate("author");
    // res.send(article)
    res.render("admin/article-edit.art", {
      article,
      link: "/admin/article-edit?id=" + id,
      id
    });
  } else {
    res.render("admin/article-edit.art", {
      link: "/admin/article-add"
    });
  }
};
