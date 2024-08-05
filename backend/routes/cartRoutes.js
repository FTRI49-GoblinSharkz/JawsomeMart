const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController.js');
const authenticate = require('../middleware/auth.js');

router.post('/',authenticate, cartController.createCart ,(req,res)=>{
})
    
router.get('/', authenticate, cartController.getCart ,(req,res)=>{

})
    
module.exports = router;
