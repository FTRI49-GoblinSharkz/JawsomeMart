const express = require("express");
const router = express.Router();
const {getProducts} = require('../controllers/productController');

router.get('/products', getProducts,(req,res)=>{

    res.json(res.locals.allProducts)

})

module.exports = router;