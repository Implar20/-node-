const express = require("express");

const home = express.Router();

// 首页
home.get("/", require("./home/index"));
// 详情页
home.get("/detail", require("./home/detail"));
// 评论
home.post("/comment", require("./home/comment"));
// 退出
home.get("/logout", require("./home/logout"));

module.exports = home;
