const express = require("express");
const admin = express.Router();

// 登陆渲染
admin.get("/login", require("./admin/loginPage"));
// 用户列表渲染
admin.get("/user", require("./admin/userPage"));
// 登陆
admin.post("/login", require("./admin/login"));
// 退出
admin.get("/logout", require("./admin/logout"));
// 新增用户页面
admin.get("/edt", require("./admin/edt"));
// 新增用户功能
admin.post("/add", require("./admin/add-fn"));
// 修改用户功能
admin.post("/edt", require("./admin/edt-fn"));
// 删除用户
admin.get("/del", require("./admin/del"));
// 文章列表渲染
admin.get("/article", require("./admin/article"));
// 文章编辑渲染
admin.get("/article-edit", require("./admin/article-edit"));
// 文章添加
admin.post("/article-add", require("./admin/article-add"));
// 文章修改
admin.post("/article-edit", require("./admin/article-fn"));
// 文章删除
admin.get("/article-del", require("./admin/article-del"));

module.exports = admin;
