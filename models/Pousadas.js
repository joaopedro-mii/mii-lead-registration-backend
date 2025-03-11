// backend/models/Pousadas.js
const mongoose = require('mongoose');

const PousadasSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    mensagem: { type: String, required: true },
    quartos: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Pousadas', PousadasSchema);
