const express = require('express');
const router = express.Router();

const verifyToken = require ('../middleware/verify-token.js');

/* ========================== */

router.use(verifyToken);

router.get('/', (req,res) => {
    res.send('userid', req.user._id)
})


module.exports = router;
