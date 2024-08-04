const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const db = require('./config/db.js');
const productsRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const verifyToken = require ('./middleware/verify-token.js');

require('dotenv').config();

db();
app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/cart', cartRoutes);

app.use('/api', productsRoutes);
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
