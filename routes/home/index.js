const { Article } = require("../../model/article");
const pagination = require("mongoose-sex-page");

module.exports = async (req, res) => {
  const { offset = 1 } = req.query;
  let result = await pagination(Article)
    .find()
    .populate("author")
    .page(offset)
    .size(4)
    .display(3)
    .exec();
  // res.send(result)
  res.render("home/index.art", { result });
};
