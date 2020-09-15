const mongoose = require('mongoose');
const aluno = require('./aluno');
const chamada = require('./chamada');

const TurmaSchema = new mongoose.Schema({
  nome: String,
  detalhes: String,
  alunosId: [mongoose.Schema.Types.ObjectId]
});

const turmas = mongoose.model('turmas', TurmaSchema);

module.exports = turmas;