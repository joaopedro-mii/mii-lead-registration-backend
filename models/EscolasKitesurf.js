// backend/models/Espetinhos.js
const mongoose = require('mongoose');

const KitesurfSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    servicos: { type: String, required: true },
    horarioDeFuncionamento: { type: String, required: true },
    endereco: { type: String, required: true },
    whatsapp: { type: String, required: true },
    instagram: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Kitesurf', KitesurfSchema);
