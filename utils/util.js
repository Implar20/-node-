const crypto = require("crypto");

const md5 = data => {
  let salt = crypto
    .createHash("md5")
    .update("niko")
    .digest("base64");
  let hash = crypto
    .createHash("md5")
    .update(data + salt)
    .digest("base64");
  return hash
};

module.exports.md5 = md5;
