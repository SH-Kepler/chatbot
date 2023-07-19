const message = require('../utils/messages');

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;

  const regex = /^\S+@\S+\.\S+$/.test(email);

  if (!regex) {
    return res.status(400).json({ message: message.emailFormat });
  }

  next();
};

const verifyPassword = async (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400)
      .json({ message: message.passwordFormat });
  }

  next();
};

module.exports = {
  verifyPassword,
  verifyEmail,
};
