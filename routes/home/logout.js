module.exports = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.redirect("/home");
    req.app.locals.userInfo = null;
  });
};
