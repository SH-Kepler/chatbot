const cors = require('cors')
const express = require('express');
const userRoute = require('../routes/user.routes');
const conversationRoute = require('../routes/conversation.routes')

const app = express();
app.use(cors())
app.use(express.json());

app.use('/user', userRoute);
app.use('/chat', conversationRoute)

app.get('/hi', (_req, res) => res.status(418).end());

module.exports = app;
