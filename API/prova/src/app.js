const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});
app.get('/GET-PRODUCT', (req, res) => {
  res.json({
    TEST: 'MY TEST',
  });
});
app.get('/SUM', (req, res) => {
  const { a, b } = req.query;

  if (!a || !b) {
    return res.status(400).json({ error: 'Please provide both a and b query parameters' });
  }

  const sum1 = parseFloat(a) + parseFloat(b);

  if (isNaN(sum1)) {
    return res.status(400).json({ error: 'Both a and b must be valid numbers' });
  }

  res.json({
    a: parseFloat(a),
    b: parseFloat(b),
    sum: sum1,
  });
});
app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
