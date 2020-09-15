const mongoose = require('mongoose');

const ChamadaSchema = new mongoose.Schema({
  data: Date,
  presentes: [mongoose.Types.ObjectId],
  ausentes: [mongoose.Types.ObjectId]
});

module.exports.schema = ChamadaSchema;
module.exports.model = mongoose.model('Chamada', ChamadaSchema);