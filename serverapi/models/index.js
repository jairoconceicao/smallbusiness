var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports = mongoose.model('ClienteModel', new Schema({
  id: { type: Number },
  nome: { type: String },
  data_nasc: { type: Date },
  data_cad: { type: Date, default: Date.now },
  telefone: { type: String },
  email: { type: String },
  endereco: { type: String },
  bairro: { type: String },
  cidade: { type: String },
  uf: { type: String },
  pais: { type: String },
  cep: { type: String } 
}));
