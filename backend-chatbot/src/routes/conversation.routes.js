const { Router } = require('express');

const conversationController = require('../controller/conversation.controller');

const route = Router();

route.post(
  '/',
  conversationController.saveChat,
);

module.exports = route;