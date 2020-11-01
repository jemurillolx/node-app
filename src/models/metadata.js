const mongoose = require('mongoose');
const { Schema } = mongoose;
//const Schema = mongoose.Schema;

const metadatosSchema = new Schema({
    Campo: { type: String, required: false },
    Tipo: { type: String, required: false },
    Descripcion: { type: String, required: false }
}); 

module.exports =  mongoose.model('metadatos_clientes', metadatosSchema);


