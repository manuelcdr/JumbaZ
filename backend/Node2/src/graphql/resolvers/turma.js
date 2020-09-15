const { turmas, alunos } = require('../../models');

const { ObjectId } = require('mongoose').Types;

const resolvers = {

  Query: {
    turmas: (_) => turmas.find(),
    turma: (_, { id }) =>
      turmas.findById(id).then((turma) => {
        turma.alunos = alunos.find({ _id: { $in: turma.alunosId } });
        return turma;
      })
  },

  Mutation: {
    criarTurma: (_, turma) => turmas.create(turma),
    addAlunoNaTurma: (_, { turmaId, alunoId }) => turmas.findByIdAndUpdate(turmaId, { $addToSet: { alunosId: alunoId } })
  }

}

module.exports = resolvers;