// const products=[]
// module.exports = class Product{
//     constructor(titel){
//         this.titel=titel
//     }
//     save(){
//         products.push(this)
//     }
//     static allData(){
//             return products;
//     }
// }


const fs = require('fs');
const path = require('path');

let newid=0

const p = path.join(
 __dirname,
 '../',
 '../',
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,name,price,imgurl,details) {

    this.name = name;
    this.price = price;
    this.imgurl = imgurl;
    this.details = details;

  }

  save(id) {
    this.id= id==null?newid:id;
    
    newid++;
    console.log(this)
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }


  static getProduct(id,cb) {
    getProductsFromFile(products => {
      let product = products.find(p => p.id == id);

      console.log(product);
      return cb(product);
    });
  }

  static allData(cb) {
    getProductsFromFile(cb);
  }
};