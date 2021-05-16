const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Producto = new Schema({

      nameProduct : {
          type: String
      }, 
      descProduct : {
          type: String
      },
      precioProduct : {
          type: Number
      },
      numProduct : {
          type: Number
      } 
},{
    collection: 'productos'
});
module.exports = mongoose.model('Productos', Producto);