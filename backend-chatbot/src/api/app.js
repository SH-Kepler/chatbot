const express = require('express');

const app = express();
app.use(express.json());

app.get('/hi', (_req, res) => res.status(418).end());

module.exports = app;
