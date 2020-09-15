const { alunos } = require('../models');

const alunoServices = {
  addMovimentacao(alunoId, valor) {
    return alunos.findByIdAndUpdate(alunoId, {
      //...
    })
  }
}

module.exports = alunoServices;