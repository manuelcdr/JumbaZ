const { alunos } = require('../../models');

const resolvers = {

  Query: {
    alunos: (_) => alunos.find(),
    aluno: (_, { id }) => alunos.findById(id),
    alunosPorTurma: (_, { turmaId }) => alunos.find({ turmaId })
  },

  Mutation: {
    criarAluno: (_, aluno) => alunos.create(aluno),
    atualizarAluno: (_, aluno) => alunos.update({ id: aluno.id }, { $set: { aluno } }),
  }

}

module.exports = resolvers;