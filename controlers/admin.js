

// const products = [];
const Product=require('../models/product')



  exports.products=(req, res, next) => {
    Product.allData((products)=>{
      res.render('admin/products', {
          prods: products,
          pageTitle: 'Shop',
          path: '/',
          hasProducts: products.length > 0
        });
   });
}

exports.editproduct=(req, res, next) => {

  const prodId = req.params.id;
  
  Product.getProduct(prodId,(product)=>{
    res.render('add-product', {
      product: product==null?{id:'null'}:product,
      pageTitle: 'ProductDetail',
      path: '/',
    });
  })
  
}



  exports.update=(req, res, next) => {
    const prodId = req.params.id;
    const name= req.body.name;
    const price= req.body.price;
    const imgurl = req.body.imgurl;

    const details= req.body.details;

    const newProduct= new Product(name,price,imgurl,details )
    newProduct.save(prodId)
    res.redirect('/admin/products');

  }


exports.delete=(req, res, next) => {
  Product.deleteById(req.params.id)
  
  res.redirect('/admin/products');
    
  }

// exports.products = products;
