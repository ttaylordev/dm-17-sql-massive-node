const express = require('express');
const bp = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const config = require('./config.js');
const pCtrl = require('./productsController')

const app = module.exports = express();


let db = massive.connectSync({
  connectionString: config.connectionString
});

app.use(bp.json());
app.use(cors());
app.set('db', db);
db = app.get('db');

app.get('/products', pCtrl.getAll);
app.post('/products', pCtrl.createProduct);
// app.put('/products', pCtrl.updateProduct);
// app.delete('/products', pCtrl.deleteProduct);

const port = '3000';
app.listen(port, function(){
  console.log('Succesfully listening on: 3000');
});