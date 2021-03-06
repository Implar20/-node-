const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  // 文章 id
  aid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article"
  },
  // 用户 id
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  time: {
    type: Date
  },
  content: {
    type: String
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = {
  Comment
};
