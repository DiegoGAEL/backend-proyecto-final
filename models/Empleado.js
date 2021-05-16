const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Empleado = new Schema({
    name : {
        type: String
    },
    apellido : {
        type: String
    },
    correo : {
        type: String
    },
    tipo : {
        type: String
    },
    numeroTel : {
        type: Number
    }

},{
    collection: 'empleados'
});
module.exports = mongoose.model('Empleados', Empleado);