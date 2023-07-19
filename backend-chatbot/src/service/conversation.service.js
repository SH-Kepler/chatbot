const { Conversation } = require('../database/models');
const { User } = require('../database/models');

const saveChat = async (chat, email) => {
  if (!chat) {
    throw new Error('O histórico de conversa é inválido ou está em formato incorreto.');
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Usuário não encontrado.');
  }

  const parsedChat = JSON.parse(chat)

  // Salvar o histórico de conversa no banco de dados
  const createChat = await Conversation.create({ conversation: parsedChat, userId: user.id });

  const chatCallback = { user: user.email, createChat };

  return { message: chatCallback };
};

module.exports = { saveChat }