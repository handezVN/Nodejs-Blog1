const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController.js');

// newsController.index
router.get('/add/:id', cartController.addtocart);
router.get('/',cartController.getcart);
module.exports = router;
