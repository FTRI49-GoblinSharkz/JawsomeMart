const Product = require('../models/productModel.js');

let productController = {};

productController.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    return next({
      message: 'error in getProducts: ' + err,
      log: err,
    });
  }
};

module.exports = productController;
