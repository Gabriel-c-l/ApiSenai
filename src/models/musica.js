const mongoose = require('mongoose');

const MusicaSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  duracao: { type: Number, required: true },
  link: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Musica', MusicaSchema);
