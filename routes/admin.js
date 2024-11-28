const path = require('path');

const express = require('express');
const admincontroler=require('../controlers/admin')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product/:id', admincontroler.editproduct);
router.get('/edit/:id', admincontroler.editproduct);

router.get('/products',admincontroler.products );

// router.get('/edite/:id',admincontroler.editproduct );

// router.post('/delete',admincontroler.delete );

// /admin/add-product => POST
// router.post('/add-product',admincontroler.update );

exports.routes = router;
