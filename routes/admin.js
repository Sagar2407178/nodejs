const path = require('path');

const express = require('express');
const admincontroler=require('../controlers/admin')

const router = express.Router();


// /admin/add-product => GET
router.get('/(add-product)?(edit)?/:id', admincontroler.editproduct);

router.get('/products',admincontroler.products );

// router.get('/edite/:id',admincontroler.editproduct );

router.get('/delete/:id',admincontroler.delete );

// /admin/add-product => POST
router.post('/add-product/:id',admincontroler.update );

exports.routes = router;
