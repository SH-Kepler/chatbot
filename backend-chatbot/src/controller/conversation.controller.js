const conversationService = require('../service/conversation.service');

  const saveChat = async (req, res) => {
    const { chat, email } = req.body;
    const {
      type, message,
    } = await conversationService.saveChat(chat, email);

    if (type) return res.status(type).json(message);

    return res.status(201).json(message);
  };

  module.exports = { saveChat };
