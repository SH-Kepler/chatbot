const userService = require('../service/user.service');

  const createUser = async (req, res) => {
    const { email, password } = req.body;
    const {
      type, message,
    } = await userService.createUser({ email, password });

    if (type) return res.status(type).json(message);

    return res.status(201).json(message);
  };

  const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const { type, message } = await userService.loginUser(email, password);

    if (type) return res.status(type).json(message);
    return res.status(200).json(message);
  };

  module.exports = { createUser, loginUser };
