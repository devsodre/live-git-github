const express = require('express');

const app = express;

app.get('/teste', (req, res) => {
  return res.json({ Hello: 'World' })
});

app.listen(3333);