const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientsSchema = new Schema({
    documento: { type: Number, required: false },
    tipo_doc: { type: Number, required: false },
    categoria: { type: String, required: false },
    mnt_trx_mm: { type: Number, required: false },
    num_trx: { type: Number, required: false },
    pct_mnt_tot: { type: Number, required: false },
    pct_num_trx_tot: { type: Number, required: false }
}); 

module.exports =  mongoose.model('datos_base_clientes',ClientsSchema);


