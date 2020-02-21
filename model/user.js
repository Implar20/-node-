// 创建用户集合
const mongoose = require("mongoose");
const crypto = require("crypto");
const Joi = require("@hapi/joi");

// 集合规则
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  email: {
    type: String,
    // 保证邮箱地址再插入数据库时不重复
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // 角色 admin normal
  role: {
    type: String,
    required: true
  },
  // 0 启用 1 禁用
  state: {
    type: Number,
    default: 0
  }
});

// 创建集合
const User = mongoose.model("User", userSchema);

function run() {
  let salt = crypto
    .createHash("md5")
    .update("niko")
    .digest("base64");
  let pass = crypto
    .createHash("md5")
    .update('vxcv' + salt)
    .digest("base64");
  User.create({
    username: "131231",
    email: "312313@123123.com",
    password: pass,
    role: "admin",
    state: 0
  });
}
// run()

// 验证用户信息
const validateUser = user => {
  const schema = Joi.object({
    username: Joi.string()
      .min(2)
      .max(12)
      .required()
      .error(new Error("用户名不符合验证规则")),
    email: Joi.string()
      .email()
      .error(new Error("邮箱不正确")),
    password: Joi.string()
      .required()
      .error(new Error("密码格式不符合要求")),
    role: Joi.string()
      .valid("normal", "admin")
      .required()
      .error(new Error("角色值非法")),
    state: Joi.number()
      .valid(0, 1)
      .required()
      .error(new Error("状态值非法"))
  });
  return schema.validateAsync(user);
};

module.exports = { User, validateUser };
