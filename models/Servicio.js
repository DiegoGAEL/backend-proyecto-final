const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Servicio = new Schema({
    numero : {
        type: Number
    },
    nameServ : {
        type:String
    },
    descServ : {
        type: String
    },
    unidadServ : {
        type: String
    },
    costServ: {
        type: Number
    }

},{
    collection: 'servicios'
});
module.exports = mongoose.model('Servicios', Servicio);