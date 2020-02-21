const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const dateformat = require("dateformat");
const template = require("art-template");
const morgan = require("morgan");
const config = require("config");

template.defaults.imports.dateformat = dateformat;

const app = express();

if (process.env.NODE_ENV === "development") {
  console.log("开发环境");
  app.use(morgan("dev"));
} else {
  console.log("生产环境");
}

// 数据库连接
require("./model/connect");

const home = require("./routes/home");
const admin = require("./routes/admin");

app.use((req, res, next) => {
  if (req.method.toLowerCase() === "options") {
    return res.end();
  }
  next();
});

app.use(
  session({
    secret: "niko",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.engine("art", require("express-art-template"));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "art");

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "node_modules")));

// 拦截请求 判断登陆状态
app.use("/admin", require("./middleware/loginGuard"));

app.use("/home", home);
app.use("/admin", admin);

app.use((err, req, res, next) => {
  let result = JSON.parse(err);
  let params = [];
  for (let key in result) {
    if (key !== "path") {
      params.push(key + `=` + result[key]);
    }
  }
  return res.redirect(`${result.path}?${params.join("&")}`);
});

app.listen("3000", () => {
  console.log("Server is running ...");
});
