const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../utils/generate.token');

const createUser = async ({ email, password }) => {
  const emailExists = await User.findOne({ where: { email } });

  if (emailExists) return ({ type: 409, message: 'User already registered' });

  const cryptoPassword = md5(password);

  const user = await User.create({ email, password: cryptoPassword });

  const token = generateToken({ email, id: user.id });

  const userCallback = { id: user.id, email, token };

  return { message: userCallback };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  try {
    const { password: userPassword } = user;
    if (md5(password) !== userPassword) return ({ type: 401, message: 'Invalid password' });
    const token = generateToken({ email: user.email, role: user.role, id: user.id });
    const userCallback = { id: user.id, email, token };
    return { message: userCallback };
  } catch (error) {
    if (!user) return ({ type: 404, message: 'User not found' });
  }
};

module.exports = { createUser, loginUser };
