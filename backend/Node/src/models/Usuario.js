const mongoose = require('mongoose');
const turma = require('./Turma');

const UsuarioSchema = new mongoose.Schema({
  _t: { type: String, default: "Usuario" },
  nome: String,
  email: String,
  turmas: [turma.schema]
});

UsuarioSchema.statics.__getType = () => 'Usuario';

module.exports.schema = UsuarioSchema;
module.exports.model = mongoose.model('Usuario', UsuarioSchema);