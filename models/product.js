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
// import {v4 as uuidv4} from 'uuid';

const e = require('express');
const fs = require('fs');
const path = require('path');

let newid=0

const generateUniqueId = require('generate-unique-id');

// example 1
// const id1 = generateUniqueId();

// example 2


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
  constructor(name,price,imgurl,details) {

    this.name = name;
    this.price = price;
    this.imgurl = imgurl;
    this.details = details;

  }

  save(id) {
   
    
    getProductsFromFile(products => {
      if(isNaN(id)){
        const newid = generateUniqueId({
          length: 2,
          useLetters: false
        });

        this.id= newid;
        products.push(this);
      }else{
        this.id=id;
        let productindex=products.findIndex(p => p.id == this.id)
        products[productindex]=this;

      }
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      // const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        if (!err) {
          // Cart.deleteProduct(id, product.price);
        }
      });
    });
  }


  static getProduct(id,cb) {
    getProductsFromFile(products => {
      let product;
      if(id!=null){
 
         product = products.find(p => p.id == id);
      }
      else{
        product={id:null }
      }
      // console.log(product)    
      return cb(product);
    });
  }

  static allData(cb) {
    getProductsFromFile(cb);
  }
};