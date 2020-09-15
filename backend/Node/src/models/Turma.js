const mongoose = require('mongoose');
const aluno = require('./Aluno');
const chamada = require('./Chamada');

const TurmaSchema = new mongoose.Schema({
  _t: { type: String, default: "Turma" },
  usuarioId: mongoose.Types.ObjectId,
  nome: String,
  detalhes: String
});

TurmaSchema.statics.__getType = () => 'Turma';

module.exports.schema = TurmaSchema;
module.exports.model = mongoose.model('Turma', TurmaSchema);