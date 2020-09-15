const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: String,
  apelido: String,
  email: String
});

module.exports.schema = AlunoSchema;
module.exports.model = mongoose.model('Aluno', AlunoSchema)