const path = require('path');

const express = require('express');

const shopconroler = require('../controlers/products');

const router = express.Router();

router.get('/', shopconroler.productdata);
router.get('/cart', shopconroler.cartdata);
router.get('/addtocart', shopconroler.cartdata);

router.get('/viewproduct/:id', shopconroler.viewproduct);

router.get('/orders', shopconroler.orderdata);


module.exports = router;
