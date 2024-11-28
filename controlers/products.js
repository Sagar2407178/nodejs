// const data= require('../controlers/admin')
const Product=require('../models/product')


exports.productdata=(req, res, next) => {
     Product.allData((products)=>{
        res.render('shop/productlist', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0
          });
     });
  }

  exports.cartdata=(req, res, next) => {
   Product.allData((products)=>{
      res.render('shop/productlist', {
          prods: products,
          pageTitle: 'Shop',
          path: '/cart',
          hasProducts: products.length > 0
        });
   });
}

exports.orderdata=(req, res, next) => {
   Product.allData((products)=>{
      res.render('shop/productlist', {
          prods: products,
          pageTitle: 'Shop',
          path: '/orders',
          hasProducts: products.length > 0
        });
   });
}

exports.viewproduct=(req, res, next) => {
  
      const prodId = req.params.id;
      console.log(prodId)
      Product.getProduct(prodId, product => {
         res.render('shop/productdetail', {
            product: product,
            pageTitle: 'ProductDetail',
            path: '/',
          });
      });
      // res.redirect('/');
}
