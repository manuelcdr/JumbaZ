const Usuario = require('./models/Usuario');
const Turma = require('./models/Turma');
const mongoose = require('mongoose');

module.exports = {

  Query: {
    usuarios: (_) => Usuario.model.find(),
    usuario: (_, { id }) => Usuario.model.findById(id),
    turmas: (_, { usuarioId }) => Turma.model.find({ usuarioId })
  },

  Mutation: {
    criarUsuario: (_, { nome, email }) => Usuario.model.create({ nome, email }),
    criarTurma: (_, { usuarioId, nome, detalhes }) => Turma.model.create({ usuarioId, nome, detalhes })
  },

  Usuario : {
    turmas: (parent) => Turma.model.find({ usuarioId : parent.id })
  }
  

}