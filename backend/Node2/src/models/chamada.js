const mongoose = require('mongoose');

const ChamadaSchema = new mongoose.Schema({
  data: Date,
  presentes: [mongoose.Types.ObjectId],
  ausentes: [mongoose.Types.ObjectId]
});

const chamadas = mongoose.model('chamadas', ChamadaSchema);

module.exports = chamadas;