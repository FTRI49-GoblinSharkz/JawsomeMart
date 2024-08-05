const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartExpiration = 30 * 24 * 60 * 60; // days * hours * minutes * seconds

const cartSchema = new Schema({
  createdAt: { type: Date, expires: cartExpiration, default: Date.now },
  user_id: {
    type: String,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

// {id: 4, title: 'Mens Casual Slim Fit', price: 15.99, description: 'The color could be slightly different between on t…uld be reviewed below on the product description.', category: "men's clothing", …}

// '4'

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
