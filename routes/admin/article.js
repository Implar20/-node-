const { Article } = require("../../model/article");
const pagination = require("mongoose-sex-page");

module.exports = async (req, res) => {
  req.app.locals.currentLink = "article";
  let { offset } = req.query;
  // page 指定当前页
  // size 指定每页显示的数据条数
  // display 指定客服端要显示的页码数量
  let articles = await pagination(Article)
    .find()
    .populate("author")
    .page(offset)
    .size(2)
    .display(3)
    .exec();

  // res.send(articles);
  res.render("admin/article.art", {
    articles
  });
};
