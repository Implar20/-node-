// 连接数据库
const mongoose = require("mongoose");
const config = require("config");

const db = config.get("db");

mongoose.set("useCreateIndex", true);
mongoose
  .connect(`mongodb://${db.user}:${db.pwd}@${db.host}:${db.port}/${db.name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(data => {
    console.log("数据库连接成功");
  })
  .catch(() => {
    console.log("数据库连接失败");
  });
process.env.NODE_ENV;
