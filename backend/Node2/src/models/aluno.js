const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: String,
  apelido: String,  
  email: String
});

const alunos = mongoose.model('alunos', AlunoSchema);

module.exports = alunos;