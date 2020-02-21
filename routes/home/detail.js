const { Article } = require("../../model/article");
const { Comment } = require("../../model/comment");

module.exports = async (req, res) => {
  const { id } = req.query;
  let result = await Article.findOne({ _id: id }).populate("author");
  let comments = await Comment.find({ aid: id }).populate("uid");
  // res.send(comments);
  res.render("home/detail.art", { result, comments });
};
