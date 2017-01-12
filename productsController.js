const massive = require('massive');
const config = require('./config.js');
const db = massive.connectSync({
  connectionString: config.connectionString
});

module.exports = {
  getAll: (req, res, next) =>{
    db.read_products(function(error, result){
      if(error){
        res.status(500).send(error);
      } else {
        res.status(200).send(result);
      }
    })
  },
  
  createProduct: (req, res, next) =>{
    let product = req.body;
    db.create_product([product.id, product.name, product.description, product.price, product.imageUrl],function(error, result){
      if(error){
        res.status(500).send(error);
      } else {
        res.status(200).send(result);
      } 
    })
  }
  
  
};