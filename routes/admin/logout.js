module.exports = (req, res) => {
  console.log(req)
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.redirect("/admin/login");
    req.app.locals.userInfo = null;
  });
};
