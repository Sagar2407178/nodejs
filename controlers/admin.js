

// const products = [];
const Product=require('../models/product')

exports.add=(req, res, next) => {

    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
    });
  }

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
  console.log(prodId)

  Product.getProduct(prodId,(product)=>{
    console.log(product)
    res.render('add-product', {
      product: product==null?{}:product,
      pageTitle: 'ProductDetail',
      path: '/',
    });
  })
  
}



  exports.update=(req, res, next) => {
    const name= req.body.name;
    console.log(name)
    const price= req.body.price;
    const   imgurl = req.body.imgurl;

    const details= req.body.details;

    const newProduct= new Product(name,price,imgurl,details )
    newProduct.save()
    res.redirect('/');
  }

// exports.products = products;
