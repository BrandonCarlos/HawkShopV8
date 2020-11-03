const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "196e44a5754486",
    pass: "0ffddfc3211d1e"
  }
});