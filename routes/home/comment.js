const { Comment } = require("../../model/comment");

module.exports = async (req, res) => {
  const { uid, aid, content } = req.body;
  await Comment.create({
    aid,
    uid,
    content,
    time: new Date()
  });
  res.redirect("/home/detail?id=" + aid);
};
